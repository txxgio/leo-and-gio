tiles.setCurrentTilemap(tilemap`level`)
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 128
    export const ARCADE_SCREEN_HEIGHT = 128
}
let mySprite = sprites.create(img`
    . . . . . f f f f f f . . . . . 
    . . . f f 2 2 2 2 2 2 f f . . . 
    . . f f 2 2 2 2 2 2 2 2 f f . . 
    . f f 2 2 2 2 2 2 2 2 2 2 f f . 
    . f 2 2 2 2 2 2 2 2 2 1 2 2 f . 
    f 2 2 2 2 2 2 2 2 2 1 1 1 2 2 f 
    f 2 2 2 2 2 2 2 2 2 2 1 2 2 2 f 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
    . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
    . f 2 2 2 2 2 2 2 2 2 2 2 f f . 
    . . f 2 2 2 2 2 2 2 2 2 f f . . 
    . . . f f 2 2 2 2 2 2 f f . . . 
    . . . . . f f f f f f . . . . . 
    `, SpriteKind.Player)
