export class Todo {
  //---------------- class properties ----------------//
  id: number;
  name: string;
  checked: boolean;

  //---------------- constructor ----------------//
  constructor(id: number, name: string, checked: boolean) {

      this.id = id;
      this.name = name;
      this.checked = checked;
  }
}
