/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RankServiceService } from 'src/Services/Rank/RankService.service';
import { RankModel } from 'src/Model/RankModel';
import { Router } from '@angular/router';
import { Requestpaging } from 'src/Model/other/requestpaging';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rank-list',
  templateUrl: './rank-list.component.html',
  styleUrls: ['./rank-list.component.scss','../../../../scss/shared/sreach.scss','../../../../scss/shared/button.scss']
})
export class RankListComponent implements OnInit{
  constructor(private service : RankServiceService,private router : Router){}
  @Output() ranksChange: EventEmitter<RankModel[]> = new EventEmitter<RankModel[]>();
  datas : RankModel[]
  searchText : any
  paging : Requestpaging={
    keyword : '',
    pageindex  : 1,
    pagesize : 10
  }
  ShowFormOptions : boolean = false
  ShowForm : boolean = false
  selectedID : string
  PageCount : number = 1
  spinner : boolean = false
  ngOnInit(): void {
    this.GetPaging()
    this.ranksChange.emit(this.datas)
  }


 ClicktoShowFormAdd(): void{
  this.ShowFormOptions = !this.ShowFormOptions
  this.ShowForm =!this.ShowForm
  this.selectedID = ""
}

ButtonClickToUpdate(id : string){
  this.ShowFormOptions =! this.ShowFormOptions
  this.ShowForm =!this.ShowForm
  this.selectedID = id
}

OnSuccess(){
  this.ShowFormOptions = false
}

  Delete(event:any,id : string){
    if(confirm('Delete this data ?')){
      this.service.DeleteRank(id).subscribe((res)=>{
        if(res){
          alert('Delete Success');
          this.GetPaging();
        } else{
          alert('Fail')
          this.GetPaging();
        }
      })
    }
  }

  onSearchChange(){
    this.SearchRankByIdAndName()
  }


  SearchRankByIdAndName(){
    this.paging.keyword = this.searchText
    this.service.GetRankPaging(this.paging).subscribe((res)=>{
      this.datas = res.items
      this.PageCount = res.pageCount
    })
  }

  GetPaging(){
    this.service.GetRankPaging(this.paging).subscribe((res)=>{
      this.datas = res.items
      this.PageCount = res.pageCount
      this.spinner = true
    })
  }

  PageChange(page : number) : void {
    this.paging.pageindex = page
    this.GetPaging()
  }

  GetAll(rank : RankModel){
    this.service.GetRank().subscribe((res)=>{
    this.datas = res
    return rank
    })
  }
}
