function doSomething3 () {
	
}
mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player2) {
	
})
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
tiles.placeOnTile(mySprite5, tiles.getTileLocation(1, 1))
let mySprite6 = sprites.create(img`
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
tiles.placeOnTile(mySprite6, tiles.getTileLocation(3, 1))
let mySprite7 = sprites.create(img`
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
tiles.placeOnTile(mySprite7, tiles.getTileLocation(5, 1))
let sprite_8 = sprites.create(img`
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
tiles.placeOnTile(sprite_8, tiles.getTileLocation(7, 1))
