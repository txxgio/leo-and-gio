mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player2) {
	
})
let b8: Sprite = null
let b7: Sprite = null
let b6: Sprite = null
let b5: Sprite = null
let b4: Sprite = null
let b3: Sprite = null
let b2: Sprite = null
let b1: Sprite = null
let highlight = sprites.create(img`
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
highlight.setPosition(8, 8)
highlight.setStayInScreen(true)
tiles.setCurrentTilemap(tilemap`level`)
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 128
    export const ARCADE_SCREEN_HEIGHT = 128
}
let p1 = sprites.create(img`
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
tiles.placeOnTile(p1, tiles.getTileLocation(0, 0))
let p2 = sprites.create(img`
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
tiles.placeOnTile(p2, tiles.getTileLocation(2, 0))
let p3 = sprites.create(img`
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
tiles.placeOnTile(p3, tiles.getTileLocation(4, 0))
let p4 = sprites.create(img`
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
tiles.placeOnTile(p4, tiles.getTileLocation(6, 0))
let p5 = sprites.create(img`
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
tiles.placeOnTile(p5, tiles.getTileLocation(1, 1))
let p6 = sprites.create(img`
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
tiles.placeOnTile(p6, tiles.getTileLocation(3, 1))
let p7 = sprites.create(img`
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
tiles.placeOnTile(p7, tiles.getTileLocation(5, 1))
let p8 = sprites.create(img`
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
tiles.placeOnTile(p8, tiles.getTileLocation(7, 1))
game.onUpdate(function () {
    if (controller.right.isPressed()) {
        highlight.x += 2
    } else if (controller.left.isPressed()) {
        highlight.x += -2
    } else if (controller.down.isPressed()) {
        highlight.y += 2
    } else if (controller.up.isPressed()) {
        highlight.y += -2
    } else {
    	
    }
})
forever(function () {
    b1 = sprites.create(img`
        . . . . . f f f f f f . . . . . 
        . . . f f a a a a a a f f . . . 
        . . f f a a a a a a a a f f . . 
        . f f a a a a a a a a a a f f . 
        . f a a a a a a a a a 1 a a f . 
        f a a a a a a a a a 1 1 1 a a f 
        f a a a a a a a a a a 1 a a a f 
        f a a a a a a a a a a 1 a a a f 
        f a a a a a a a a a a a a a a f 
        f a a a a a a a a a a a a a a f 
        f a a a a a a a a a a a a a a f 
        . f a a a a a a a a a a a a f . 
        . f a a a a a a a a a a a f f . 
        . . f a a a a a a a a a f f . . 
        . . . f f a a a a a a f f . . . 
        . . . . . f f f f f f . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(b1, tiles.getTileLocation(1, 7))
    b2 = sprites.create(img`
        . . . . . f f f f f f . . . . . 
        . . . f f a a a a a a f f . . . 
        . . f f a a a a a a a a f f . . 
        . f f a a a a a a a a a a f f . 
        . f a a a a a a a a a 1 a a f . 
        f a a a a a a a a a 1 1 1 a a f 
        f a a a a a a a a a a 1 a a a f 
        f a a a a a a a a a a 1 a a a f 
        f a a a a a a a a a a a a a a f 
        f a a a a a a a a a a a a a a f 
        f a a a a a a a a a a a a a a f 
        . f a a a a a a a a a a a a f . 
        . f a a a a a a a a a a a f f . 
        . . f a a a a a a a a a f f . . 
        . . . f f a a a a a a f f . . . 
        . . . . . f f f f f f . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(b2, tiles.getTileLocation(3, 7))
    b3 = sprites.create(img`
        . . . . . f f f f f f . . . . . 
        . . . f f a a a a a a f f . . . 
        . . f f a a a a a a a a f f . . 
        . f f a a a a a a a a a a f f . 
        . f a a a a a a a a a 1 a a f . 
        f a a a a a a a a a 1 1 1 a a f 
        f a a a a a a a a a a 1 a a a f 
        f a a a a a a a a a a 1 a a a f 
        f a a a a a a a a a a a a a a f 
        f a a a a a a a a a a a a a a f 
        f a a a a a a a a a a a a a a f 
        . f a a a a a a a a a a a a f . 
        . f a a a a a a a a a a a f f . 
        . . f a a a a a a a a a f f . . 
        . . . f f a a a a a a f f . . . 
        . . . . . f f f f f f . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(b3, tiles.getTileLocation(5, 7))
    b4 = sprites.create(img`
        . . . . . f f f f f f . . . . . 
        . . . f f a a a a a a f f . . . 
        . . f f a a a a a a a a f f . . 
        . f f a a a a a a a a a a f f . 
        . f a a a a a a a a a 1 a a f . 
        f a a a a a a a a a 1 1 1 a a f 
        f a a a a a a a a a a 1 a a a f 
        f a a a a a a a a a a 1 a a a f 
        f a a a a a a a a a a a a a a f 
        f a a a a a a a a a a a a a a f 
        f a a a a a a a a a a a a a a f 
        . f a a a a a a a a a a a a f . 
        . f a a a a a a a a a a a f f . 
        . . f a a a a a a a a a f f . . 
        . . . f f a a a a a a f f . . . 
        . . . . . f f f f f f . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(b4, tiles.getTileLocation(7, 7))
    b5 = sprites.create(img`
        . . . . . f f f f f f . . . . . 
        . . . f f a a a a a a f f . . . 
        . . f f a a a a a a a a f f . . 
        . f f a a a a a a a a a a f f . 
        . f a a a a a a a a a 1 a a f . 
        f a a a a a a a a a 1 1 1 a a f 
        f a a a a a a a a a a 1 a a a f 
        f a a a a a a a a a a 1 a a a f 
        f a a a a a a a a a a a a a a f 
        f a a a a a a a a a a a a a a f 
        f a a a a a a a a a a a a a a f 
        . f a a a a a a a a a a a a f . 
        . f a a a a a a a a a a a f f . 
        . . f a a a a a a a a a f f . . 
        . . . f f a a a a a a f f . . . 
        . . . . . f f f f f f . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(b5, tiles.getTileLocation(0, 6))
    b6 = sprites.create(img`
        . . . . . f f f f f f . . . . . 
        . . . f f a a a a a a f f . . . 
        . . f f a a a a a a a a f f . . 
        . f f a a a a a a a a a a f f . 
        . f a a a a a a a a a 1 a a f . 
        f a a a a a a a a a 1 1 1 a a f 
        f a a a a a a a a a a 1 a a a f 
        f a a a a a a a a a a 1 a a a f 
        f a a a a a a a a a a a a a a f 
        f a a a a a a a a a a a a a a f 
        f a a a a a a a a a a a a a a f 
        . f a a a a a a a a a a a a f . 
        . f a a a a a a a a a a a f f . 
        . . f a a a a a a a a a f f . . 
        . . . f f a a a a a a f f . . . 
        . . . . . f f f f f f . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(b6, tiles.getTileLocation(2, 6))
    b7 = sprites.create(img`
        . . . . . f f f f f f . . . . . 
        . . . f f a a a a a a f f . . . 
        . . f f a a a a a a a a f f . . 
        . f f a a a a a a a a a a f f . 
        . f a a a a a a a a a 1 a a f . 
        f a a a a a a a a a 1 1 1 a a f 
        f a a a a a a a a a a 1 a a a f 
        f a a a a a a a a a a 1 a a a f 
        f a a a a a a a a a a a a a a f 
        f a a a a a a a a a a a a a a f 
        f a a a a a a a a a a a a a a f 
        . f a a a a a a a a a a a a f . 
        . f a a a a a a a a a a a f f . 
        . . f a a a a a a a a a f f . . 
        . . . f f a a a a a a f f . . . 
        . . . . . f f f f f f . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(b7, tiles.getTileLocation(4, 6))
    b8 = sprites.create(img`
        . . . . . f f f f f f . . . . . 
        . . . f f a a a a a a f f . . . 
        . . f f a a a a a a a a f f . . 
        . f f a a a a a a a a a a f f . 
        . f a a a a a a a a a 1 a a f . 
        f a a a a a a a a a 1 1 1 a a f 
        f a a a a a a a a a a 1 a a a f 
        f a a a a a a a a a a 1 a a a f 
        f a a a a a a a a a a a a a a f 
        f a a a a a a a a a a a a a a f 
        f a a a a a a a a a a a a a a f 
        . f a a a a a a a a a a a a f . 
        . f a a a a a a a a a a a f f . 
        . . f a a a a a a a a a f f . . 
        . . . f f a a a a a a f f . . . 
        . . . . . f f f f f f . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(b8, tiles.getTileLocation(6, 6))
})
