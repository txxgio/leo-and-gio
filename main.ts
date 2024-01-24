namespace SpriteKind {
    export const selector = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.placeOnTile(highlight, highlight.tilemapLocation().getNeighboringLocation(CollisionDirection.Top))
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let value of sprites.allOfKind(SpriteKind.Player)) {
        if (highlight.tilemapLocation().col == value.tilemapLocation().col && highlight.tilemapLocation().row == value.tilemapLocation().row) {
            value.follow(highlight, 64)
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.placeOnTile(highlight, highlight.tilemapLocation().getNeighboringLocation(CollisionDirection.Left))
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.placeOnTile(highlight, highlight.tilemapLocation().getNeighboringLocation(CollisionDirection.Right))
})

function spawnPink () {
    p1 = sprites.create(img`
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
    p2 = sprites.create(img`
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
    p3 = sprites.create(img`
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
    p4 = sprites.create(img`
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
    p5 = sprites.create(img`
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
    p6 = sprites.create(img`
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
    p7 = sprites.create(img`
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
    p8 = sprites.create(img`
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
    pink_list = [
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
    p7,
    p8
    ]
}
function spawnBlue () {
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
    blue_list = [
    b1,
    b2,
    b3,
    b4,
    b5,
    b6,
    b7,
    b8
    ]
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.placeOnTile(highlight, highlight.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom))
})
sprites.onOverlap(SpriteKind.selector, SpriteKind.Player, function (sprite, otherSprite) {
	
})
let blue_list: Sprite[] = []
let b8: Sprite = null
let b7: Sprite = null
let b6: Sprite = null
let b5: Sprite = null
let b4: Sprite = null
let b3: Sprite = null
let b2: Sprite = null
let b1: Sprite = null

let pink_list: Sprite[] = []
let p8: Sprite = null
let p7: Sprite = null
let p6: Sprite = null
let p5: Sprite = null
let p4: Sprite = null
let p3: Sprite = null
let p2: Sprite = null
let p1: Sprite = null
let list: number[] = []
let highlight: Sprite = null
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
    `, SpriteKind.selector)
highlight.setStayInScreen(true)
tiles.setCurrentTilemap(tilemap`level`)
tiles.placeOnTile(highlight, tiles.getTileLocation(1, 1))
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 128
    export const ARCADE_SCREEN_HEIGHT = 128
}
spawnPink()
spawnBlue()