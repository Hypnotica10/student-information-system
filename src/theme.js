import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

export const drawerWidth = 240;

export const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: '#fcfcfc',
                    light: '#f2f0f0'
                },
                secondary: {
                    main: '#4cceac',
                },
                neutral: {
                    dark: '#3d3d3d',
                    main: '#666666',
                    light: '#a3a3a3',
                },
                background: {
                    default: "#fcfcfc",
                    paper: '#fcfcfc'
                },
                colorText: {
                    main: '#141414'
                },
                blue: {
                    main: '#a4a9fc'
                }
            },
        },
        dark: {
            palette: {
                primary: {
                    main: '#141b2d',
                    light: '#1F2A40'
                },
                secondary: {
                    main: '#4cceac',
                },
                neutral: {
                    dark: '#3d3d3d',
                    main: '#666666',
                    light: '#a3a3a3',
                },
                background: {
                    default: '#141b2d',
                    paper: '#141b2d'
                },
                colorText: {
                    main: '#fff'
                },
                blue: {
                    main: '#a4a9fc'
                }
            },
        },
    },
    // ...other properties
    spacing: (spacing) => `${4 * spacing}px`,
    typography: {
        fontSize: 12,
        h1: {
            fontSize: 40,
        },
        h2: {
            fontSize: 32,
        },
        h3: {
            fontSize: 24,
        },
        h4: {
            fontSize: 20,
        },
        h5: {
            fontSize: 16,
        },
        h6: {
            fontSize: 14,
        },
    }
});
