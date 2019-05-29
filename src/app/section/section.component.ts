import { Component, OnInit } from '@angular/core';
import {ApiSectionService} from "../shared/api-section.service";
import {Section} from "../model/section";
import {MatDialog, MatDialogConfig} from "@angular/material";
import {AddNewSectionComponent} from "./add-new-section/add-new-section.component";
import {Router} from "@angular/router";
import {AddNewSubjectComponent} from "./add-new-subject/add-new-subject.component";
import {ApiSubjectService} from "../shared/api-subject.service";
import {Subject} from "../model/subject";
import {Student} from "../model/student";
import {EditSubjectComponent} from "./edit-subject/edit-subject.component";



@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  section: Section;
  subject: Subject;
  allSections: Section[];


  constructor(private sectionService: ApiSectionService,  private subjectService: ApiSubjectService, public dialog: MatDialog, private router: Router) {}


  ngOnInit() {
    this.getAllSection();
  }


  getAllSection(){
    this.sectionService.findAllSections().subscribe(res=>{this.allSections = res},err=>{alert("Error has occurred while getting data")})
  }

  openDialogNewSubject(section : Section): void {

    const dialogConfig = new MatDialogConfig();

    this.sectionService.getSectionById(section.id).subscribe(res => {
      this.section = section;

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data = section;
      const dialogRef = this.dialog.open(AddNewSubjectComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(data => {
        this.subject=data;
        this.subject.categoryId=section.id;
        this.subjectService.addNewSubject(this.subject).subscribe(value => this.getAllSection())}
        )
    })
  }

  openDialogEditSubject(subject: Subject){

    const dialogConfig = new MatDialogConfig();


      this.subjectService.getSubjectById(subject.id).subscribe(res =>{
        dialogConfig.disableClose = true;
       dialogConfig.autoFocus = true;
        dialogConfig.data = subject;

        const dialogRef = this.dialog.open(EditSubjectComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(data => {
          this.subject=data;
          this.subjectService.updateSubject(this.subject).subscribe(value => this.getAllSection())}
        )
      });

  }

  openDialogNewSection(): void {

    const dialogConfig = new MatDialogConfig();


    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(AddNewSectionComponent,dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
        console.log(data);
        this.section = data;
        this.sectionService.addNewSection(this.section).subscribe(value => {
          this.getAllSection();
        });

    } );

  }

  deleteSection(section: Section){
    if(confirm("Na pewno chcesz usunąć całą sekcję?")){
      this.sectionService.deleteSection(section.id).subscribe(
        res =>{
          this.getAllSection();
        },
        err=>{alert("Could not delete client")}
      );
    }
  }

  deleteSubject(subject: Subject){
    if(confirm("Na pewno chcesz usunąć temat zajęć?")){
      this.subjectService.deleteSubject(subject.id).subscribe(
        res =>{
          this.getAllSection();
        },
        err=>{alert("Could not delete client")}
      );
    }
  }

}

