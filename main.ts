function doSomething () {
    highlight = sprites.create(img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, SpriteKind.Player)
    tiles.placeOnTile(highlight, tiles.getTileLocation(0, 0))
}
let highlight: Sprite = null
tiles.setCurrentTilemap(tilemap`level`)
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 128
    export const ARCADE_SCREEN_HEIGHT = 128
}
let mySprite = sprites.create(img`
    . . . . . f f f f f f . . . . . 
    . . . f f 3 3 3 3 3 3 f f . . . 
    . . f f 3 3 3 3 3 3 3 3 f f . . 
    . f f 3 3 3 3 3 3 3 3 3 3 f f . 
    . f 3 3 3 3 3 3 3 3 3 1 3 3 f . 
    f 3 3 3 3 3 3 3 3 3 1 1 1 3 3 f 
    f 3 3 3 3 3 3 3 3 3 3 1 3 3 3 f 
    f 3 3 3 3 3 3 3 3 3 3 1 3 3 3 f 
    f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
    f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
    f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
    . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
    . f 3 3 3 3 3 3 3 3 3 3 3 f f . 
    . . f 3 3 3 3 3 3 3 3 3 f f . . 
    . . . f f 3 3 3 3 3 3 f f . . . 
    . . . . . f f f f f f . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
let mySprite2 = sprites.create(img`
    . . . . . f f f f f f . . . . . 
    . . . f f 3 3 3 3 3 3 f f . . . 
    . . f f 3 3 3 3 3 3 3 3 f f . . 
    . f f 3 3 3 3 3 3 3 3 3 3 f f . 
    . f 3 3 3 3 3 3 3 3 3 1 3 3 f . 
    f 3 3 3 3 3 3 3 3 3 1 1 1 3 3 f 
    f 3 3 3 3 3 3 3 3 3 3 1 3 3 3 f 
    f 3 3 3 3 3 3 3 3 3 3 1 3 3 3 f 
    f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
    f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
    f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
    . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
    . f 3 3 3 3 3 3 3 3 3 3 3 f f . 
    . . f 3 3 3 3 3 3 3 3 3 f f . . 
    . . . f f 3 3 3 3 3 3 f f . . . 
    . . . . . f f f f f f . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(2, 0))
let mySprite3 = sprites.create(img`
    . . . . . f f f f f f . . . . . 
    . . . f f 3 3 3 3 3 3 f f . . . 
    . . f f 3 3 3 3 3 3 3 3 f f . . 
    . f f 3 3 3 3 3 3 3 3 3 3 f f . 
    . f 3 3 3 3 3 3 3 3 3 1 3 3 f . 
    f 3 3 3 3 3 3 3 3 3 1 1 1 3 3 f 
    f 3 3 3 3 3 3 3 3 3 3 1 3 3 3 f 
    f 3 3 3 3 3 3 3 3 3 3 1 3 3 3 f 
    f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
    f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
    f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
    . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
    . f 3 3 3 3 3 3 3 3 3 3 3 f f . 
    . . f 3 3 3 3 3 3 3 3 3 f f . . 
    . . . f f 3 3 3 3 3 3 f f . . . 
    . . . . . f f f f f f . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite3, tiles.getTileLocation(4, 0))
let mySprite4 = sprites.create(img`
    . . . . . f f f f f f . . . . . 
    . . . f f 3 3 3 3 3 3 f f . . . 
    . . f f 3 3 3 3 3 3 3 3 f f . . 
    . f f 3 3 3 3 3 3 3 3 3 3 f f . 
    . f 3 3 3 3 3 3 3 3 3 1 3 3 f . 
    f 3 3 3 3 3 3 3 3 3 1 1 1 3 3 f 
    f 3 3 3 3 3 3 3 3 3 3 1 3 3 3 f 
    f 3 3 3 3 3 3 3 3 3 3 1 3 3 3 f 
    f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
    f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
    f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
    . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
    . f 3 3 3 3 3 3 3 3 3 3 3 f f . 
    . . f 3 3 3 3 3 3 3 3 3 f f . . 
    . . . f f 3 3 3 3 3 3 f f . . . 
    . . . . . f f f f f f . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite4, tiles.getTileLocation(6, 0))
let mySprite5 = sprites.create(img`
    . . . . . f f f f f f . . . . . 
    . . . f f 3 3 3 3 3 3 f f . . . 
    . . f f 3 3 3 3 3 3 3 3 f f . . 
    . f f 3 3 3 3 3 3 3 3 3 3 f f . 
    . f 3 3 3 3 3 3 3 3 3 1 3 3 f . 
    f 3 3 3 3 3 3 3 3 3 1 1 1 3 3 f 
    f 3 3 3 3 3 3 3 3 3 3 1 3 3 3 f 
    f 3 3 3 3 3 3 3 3 3 3 1 3 3 3 f 
    f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
    f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
    f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
    . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
    . f 3 3 3 3 3 3 3 3 3 3 3 f f . 
    . . f 3 3 3 3 3 3 3 3 3 f f . . 
    . . . f f 3 3 3 3 3 3 f f . . . 
    . . . . . f f f f f f . . . . . 
    `, SpriteKind.Player)
