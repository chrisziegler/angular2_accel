import {RACING} from './mocks';
import {Injectable} from '@angular/core';


@Injectable()
export class RacingDataService {
    getRaces() {
        return RACING;
    }
}