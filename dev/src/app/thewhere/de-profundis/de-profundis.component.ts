import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-de-profundis',
    templateUrl: './de-profundis.component.html',
    styleUrls: ['./de-profundis.component.css']
})
export class DeProfundisComponent implements OnInit {

    objId = 'vk_playlist_31398635_18599395';
    ownerId = 31398635;
    playlistId = 18599395;
    hash = 'a50978c1a5f13fe34d';

    ngOnInit(): void {
        initVkPlaylist(this.objId, this.ownerId, this.playlistId, this.hash);
    }
}
