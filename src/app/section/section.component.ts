import { Component, OnInit } from '@angular/core';
import {ApiSectionService} from "../shared/api-section.service";
import {Section} from "../model/section";
import {MatDialog, MatDialogConfig} from "@angular/material";
import {AddNewSectionComponent} from "./add-new-section/add-new-section.component";
import {Router} from "@angular/router";
import {AddNewSubjectComponent} from "./add-new-subject/add-new-subject.component";
import {ApiSubjectService} from "../shared/api-subject.service";
import {Subject} from "../model/subject";
import {DataSource} from "@angular/cdk/table";
import {ApiStudentService} from "../shared/api-student.service";
import {Observable} from "rxjs";
import {Student} from "../model/student";


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  section: Section;
  subject: Subject;
  allSections: Section[];
  constructor(private sectionService: ApiSectionService,  private subjectService: ApiSubjectService, public dialog: MatDialog, private router: Router) { }

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
      const dialogRef = this.dialog.open(AddNewSubjectComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(data => {
        this.subject=data;
        this.subject.categoryId=section.id;
        this.subjectService.addNewSubject(this.subject).subscribe()}
        )
    })


    }

  openDialogNewSection(): void {

    const dialogConfig = new MatDialogConfig();


    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(AddNewSectionComponent,dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
        console.log(data);
        this.section = data;
        this.sectionService.addNewSection(this.section).subscribe();
        this.router.navigate(['']);
    } );

  }

}

export class SectionData extends DataSource<any> {
  constructor(private sectionService: ApiSectionService) {
    super();
  }
  connect(): Observable<Section[]> {
    return this.sectionService.findAllSections();
  }
  disconnect() {}
}
