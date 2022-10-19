import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-winter',
    templateUrl: './winter.component.html',
    styleUrls: ['./winter.component.css']
})
export class WinterComponent implements OnInit {

    objId = 'vk_playlist_-30610659_1';
    ownerId = -30610659;
    playlistId = 1;
    hash = '5e72ae779b79d78e25';

    ngOnInit(): void {
        initVkPlaylist(this.objId, this.ownerId, this.playlistId, this.hash);
    }
}
