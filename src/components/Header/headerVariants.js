

export const firstLineVariant = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: .4,         
        }
    }  
};

export const firstCircleVariant = {
    hidden: {
        x: -100,
        y: 20,
        opacity: 0,
    },
    visible: {
        x: 0,
        y: 20,
        opacity: 1,
        transition: {
            delay: .2,
            duration: .4
        }
    }
};

export const headerIntroVariant = {
    hidden: {
        x: -10,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: .8,
            duration: .6 
        }
    }
}

export const squareContainerVariant = {
    hidden: {
        y: -10,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 1.1,
            duration: .4
        }
    }
}

export const thirdContainerVariant = {
    hidden: {
        x: -10,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 1.5,
            duration: .4
        }
    }
}

export const secondCircleVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        backgroundColor: 'rgba(187, 68, 48, 1)',
        transition: {
            delay: 1.8
        }
    }
}

export const headerBoxVariant = {
    hidden: {
        y: 20,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 1.8,
            duration: .4
        }
    }
}


