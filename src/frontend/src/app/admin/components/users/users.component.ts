import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms'

import { User } from "../../../core/models/user.model";
import { UserService } from "../../../core/services/User/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public mensaje = {
    titulo: 'Eliminar usuario',
    mensaje: '¿Estas seguro de eliminar el usuario?',
    respuesta: false
  }

  users:any = [];
  user: User = {
    username: '',
    email: '',
    password: '',
    role: 0
  };
  u = {

    username : "",
    email : "",
    password: "",
    role: 1
  };

  roles:any = [];

  constructor(
    private userService:UserService,
    private formBuilder: FormBuilder

  ) {

  }

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  userForm = this.formBuilder.group({
    _id: null,
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    role: 1
  });


  selectChange( $event:any) {
    console.log($event);

    //console.log(this.user.role);
  }


  getRoles(){
    return [
      {id: '0', name: 'Administrador', selected: 'selected'},
      {id: '1', name: "Regular"}
    ];
  }

  clear():boolean{
    this.user= this.u;
    this.userForm.reset();
    this.userForm.patchValue({
      _id: null,
      username: '',
      email: '',
      password: '',
      role: 1
    });

    return false;

  }

  get _id(){
    return this.userForm.get('_id');
  }

  get role(){
    return this.userForm.get('role');
  }

  get username(){
    return this.userForm.get('username');
  }

  get password(){
    return this.userForm.get('password');
  }

  get email(){
    return this.userForm.get('email');
  }

  ngOnInit(): void {
    this.getUsers();
    this.user = this.u;
    this.roles = this.getRoles();
    //console.log(this.userForm);

  }

  roleSelected(role: any){
    //console.log(role);
    this.user.role = role;
  }

  getUsers(){
    this.userService.getUsers()
    .subscribe(
       res => {
         //console.log(res);
         this.users = res;
       },
       err=> console.log(err)
    )
  }

  getUser(id:string){
      this.userService.getUser(id)
      .subscribe(
        res => {
          //console.log(res);
          this.user = res;
        },
        err=> console.log(err)
      )

  }

  addUser(){
    if (this.userForm.status == "VALID"){
        if (this.user._id){ //actualizamos
            this.userService.updateUser(this.user._id, this.user.username, this.user.email, this.user.password, this.user.role)
                  .subscribe(response =>{
                      //console.log(response);
                      this.clear();
                      this.getUsers();
                  }),
              (err:any)=> console.log(err)
        }
        else { //Insertamos
          this.userService.createUser(this.user)
          .subscribe(
              res => {
                //console.log(res);
                this.clear();
                this.getUsers();
              },
              err=> console.log(err)
          )
        }
    }
  }

  updateUser(user:User){
    this.user = user;
  }

  deleteUser(id:string){

    this.userService.deleteUser(id)
      .subscribe(
        res => {
          //console.log(res);
          this.getUsers();
        },
        err=> console.log(err)
      );
  }

  openModal(_id:string){

    // const modalRef = this.modalService.open(ModalAceptCancelComponent);
     //modalRef.componentInstance.mensaje = this.mensaje;
    // modalRef.result.then((result) => {
      //if (result) {
       // if (result.respuesta){
         if(confirm("¿Desea eliminar éste usuario?")){
          this.deleteUser(_id);
         }

        //}
      //}
    //});
  }
}
