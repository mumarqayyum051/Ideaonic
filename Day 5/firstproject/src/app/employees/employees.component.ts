import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent  {

 employees: any[] = [
   {company: 'Alfreds Futterkiste' , contract : 'Maria Anders' , Country: 'Germany'  },
   {company: 'Alfreds Futterkiste' , contract : 'Maria Anders' , Country: 'Germany'  },
   {company: 'Alfreds Futterkiste' , contract : 'Maria Anders' , Country: 'Germany'  },
   {company: 'Alfreds Futterkiste' , contract : 'Maria Anders' , Country: 'Germany'  },
 ]
}
