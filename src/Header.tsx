import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
    return (
        <Toolbar sx={{ marginBottom: 2 }}>
            <AppBar
                position="fixed"
                color="primary"
                sx={{ top: 0, paddingY: 1 }}
            >
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    jimin.party
                </Typography>
            </AppBar>
        </Toolbar>
    );
};

export default Header;
