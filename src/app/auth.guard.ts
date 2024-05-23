import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const user_type = localStorage.getItem("userType");
  if(user_type ==='Admin'){
    return true;

  }
  else{
    return false;

  }

};
