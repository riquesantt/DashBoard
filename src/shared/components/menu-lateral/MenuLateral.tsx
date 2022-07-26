import { Drawer, useTheme} from "@mui/material";
import { Box } from "@mui/system";


interface IMenuLateralProps{
    children: React.ReactNode;
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {

    const theme = useTheme();

    return (
<>
    <Drawer> 
        <Box height="100vh" width={theme.spacing(28)}>
            Menu Lateral
        </Box>
    </Drawer>
    
    <Box height="100vh" marginLeft={theme.spacing(28)}>
        { children }
    </Box>
</>
);

};