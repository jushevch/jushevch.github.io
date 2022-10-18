import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-nocturnal',
    templateUrl: './nocturnal.component.html',
})
export class NocturnalComponent implements OnInit {

    objId = 'vk_playlist_31398635_18599394';
    ownerId = 31398635;
    playlistId = 18599394;
    hash = 'f36289892987f4f8dc';

    ngOnInit(): void {
        initVkPlaylist(this.objId, this.ownerId, this.playlistId, this.hash);
    }
}
