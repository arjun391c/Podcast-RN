function makeHitSlop (size: number) {
    return {
        top: size,
        right: size,
        left: size,
        bottom: size
    }
}

export const metrics = {
    tabIconSize: 24,
    makeHitSlop
}