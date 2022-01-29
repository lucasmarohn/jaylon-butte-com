export const theme = {
    styles: {
        global: {
            "body": {
                fontFamily: 'courier new, monospace',
                color: 'gray.900'
            }
        }
    },
    components: {
        Heading: {
            baseStyle: {
                fontFamily: 'courier new, monospace',
                fontWeight: '600',
            }
        },
        Text: {
            baseStyle: {
                color: 'gray.900',
                fontSize: 'lg',
            }
        },
        Container: {
            baseStyle: {
                px: 8,
                maxW: 'container.lg'
            }
        }
    },
    colors: {
        brand: {
            900: "#000000",
        }
    }
}