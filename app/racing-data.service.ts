import {RACING} from './mocks';
import {Injectable} from '@angular/core';


export class RacingDataService {
    getRaces() {
        return RACING;
    }
}