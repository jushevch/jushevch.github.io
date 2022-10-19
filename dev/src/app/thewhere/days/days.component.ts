import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-days',
    templateUrl: './days.component.html',
    styleUrls: ['./days.component.css']
})
export class DaysComponent implements OnInit {

    objId = 'vk_playlist_-30610659_2';
    ownerId = -30610659;
    playlistId = 2;
    hash = 'a62b6dd380ed40944e';

    ngOnInit(): void {
        initVkPlaylist(this.objId, this.ownerId, this.playlistId, this.hash);
    }
}
