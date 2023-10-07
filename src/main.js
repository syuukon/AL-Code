import { Mage } from './character/strategy/mage.js';
import { Merchant } from './character/strategy/merchant.js';
import { Paladin } from './character/strategy/paladin.js';
import { Priest } from './character/strategy/priest.js';
import { Ranger } from './character/strategy/ranger.js';
import { Rogue } from './character/strategy/rogue.js';
import { Warrior } from './character/strategy/warrior.js';

import { partyUp } from './functions/party.js';

game_log(`CODE START: ${new Date().toLocaleString('en-GB').slice(11, 20)}`);
game_log(`CHARACTER: ${character.name}`);

let mage = new Mage();
let merchant = new Merchant();
let paladin = new Paladin();
let priest = new Priest();
let ranger = new Ranger();
let rogue = new Rogue();
let warrior = new Warrior();

setInterval(partyUp, 1000 * 10);
