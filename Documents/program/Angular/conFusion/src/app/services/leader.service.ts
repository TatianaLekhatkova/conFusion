import { Injectable } from '@angular/core';
import { Leader, LEADERS } from '../shared/leader';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }
  getLeaders(): Leader[] {
    return LEADERS;
  }

  getDish(name: String): Leader {
    return LEADERS.filter((leader) => (leader.name === name))[0];
  }

  getFeaturedLeader(): Leader {
    return LEADERS.filter((leader) => leader.featured)[0];
  }
}
