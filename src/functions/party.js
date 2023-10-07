import { PARTY_LIST } from "../config/generalConfig.js"

parent.socket.on("invite", async ({ name }) => {
    try {
        if (PARTY_LIST.includes(name)) {
            await accept_party_invite(name);
            game_log(`Accepted Invite: ${name}`)
        } else {
            game_log(`Declined Invite: ${name}`)
        }
    } catch (e) {
        return game_log(e)
    }
});

parent.socket.on("request", async ({ name }) => {
    try {
        if (PARTY_LIST.includes(name)) {
            await accept_party_request(name);
            game_log(`Accepted Request: ${name}`)
        } else {
            game_log(`Declined Request: ${name}`)
        }
    } catch (e) {
        return game_log(e)
    }
});

export function partyUp() {
    try {
        if (parent.party_list.length >= 3) {
            return;
        }
        if (character.name === PARTY_LIST[0]) {
            for (let i = 1; i < PARTY_LIST.length; i++) {
                let name = PARTY_LIST[i];
                if (parent.party_list.includes(name)) {
                    return;
                } else {
                    send_party_invite(name);
                }
            }
        } else {
            if (character.party) {
                if (character.party !== PARTY_LIST[0]) {
                    leave_party();
                }
            } else {
                if (PARTY_LIST.includes(character.name)) {
                    send_party_request(PARTY_LIST[0]);
                }
            }
        }
    } catch (e) {
        return game_log(e)
    }
}
