import React, { useState } from 'react'
import "./codeEntry.scss"
import { Container, Grid, Link, TextField, Button, Box, CssBaseline, Avatar, Typography } from '@mui/material';
import { verifyCode } from '../../db/firebaseMethods';

export default function CodeEntry() {
    const [code, setCode] = useState("");

    const onCodeButtonClick = async ()=>{
        //TODO: kod hane sayısı tam mı, filan falan kontrol.
        const certificateObject = await verifyCode(code);
        console.log('certificateObject :>> ', certificateObject);
        <Link to="/personalinfo" />
    }

    return (
        <>
            <Container>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 2,
                        marginBottom: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        avatar
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        YESBox'a Hoşgeldiniz
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="code"
                                    label="YESBox Kod"
                                    placeholder='Lütfen kutunun üstündeki kodu giriniz'
                                    value={code}
                                    onChange={e=> setCode(e.target.value.toLocaleUpperCase())}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={onCodeButtonClick}
                        >
                            Kodu Gönder
                        </Button>






                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Button
                                    style={{
                                        textDecoration: "underline",
                                        textTransform: "none",
                                        fontSize: "1rem",
                                        color: "-webkit-link",
                                        marginTop: 10,
                                    }}

                                >
                                    Bir sorun mu yaşıyorsunuz, iletişime geçmek için tıklayın.
                                </Button>
                            </Grid>
                        </Grid>

                    </Box>
                </Box>
            </Container>
        </>
    )
}
