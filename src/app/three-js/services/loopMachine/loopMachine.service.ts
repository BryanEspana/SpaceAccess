import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoopMachineService {
//codigo de angular
  flag: boolean = false;
  callbacks: any[] = [];
  constructor() { }
  addCallback(callback: any){
    let index = this.callbacks.indexOf(callback)
    if (index > -1) return
    this.callbacks.push(callback)
  }
  removeCallback(callback: any){
    let index = this.callbacks.indexOf(callback)
    if (index > -1) return
    this.callbacks.splice(index, 1)
  }
  run = () => {
    if (!this.flag) return
    this.callbacks.forEach(cb => cb())
    window.requestAnimationFrame(this.run)
  }
  start(){
    if (this.flag) return
    this.flag = true
    this.run()
  }
  stop(){
    this.flag = false
  }




}

