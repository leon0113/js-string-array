const friends = ['gegeerg', 'geg', 'ewrgewqgfr', 'frgtgffr'];

function megaFriend(fri) {
    if (Array.isArray(fri) == false) {
        console.log('Please provide an array');
    }
    else {
        let firstFriend = fri[0];
        for (const friend of fri) {
            if (friend.length > firstFriend.length) {
                firstFriend = friend;
            }
        }
        return firstFriend;
    }

}

const myBigFriend = megaFriend(friends);
console.log(myBigFriend);

//!=============================================================================
// includes
if (friends.includes('geg')) {
    // console.log('YES');
}
// concat
const first = [1, 2, 3];
const second = [4, 5, 6];
const combained = first.concat(second);
// console.log(combained);