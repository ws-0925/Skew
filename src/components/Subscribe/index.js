import styled from '@emotion/styled';
import {Box, Button, TextField, Typography} from '@mui/material';

const SubscribeWrapper = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    ${({ theme }) => theme.breakpoints.down('md')} {
		display: none;
	}
`

const Subscribe = () => {
    return (
        <SubscribeWrapper>
            <TextField 
                sx={{
                    borderRadius: '32px',
                    backgroundColor: '#282828',
                    fontSize: '14px',
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            border: 'none'
                        }
                    },
                    marginRight: '20px',
                    width: '650px'
                }}
                inputProps={{
                    sx:{
                        color: 'white',
                        py: '18.5px',
                        marginLeft: '15px'
                    }
                }}
                placeholder="Email address"
            />
            <Button
                sx={{
                    borderRadius: '64px',
                    backgroundColor: '#38B6FF',
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: 400,
                    px: '32px',
                    py: '16px',
                    textTransform: 'none'
                }}
           >
                Subscribe
            </Button>
            
        </SubscribeWrapper>
    )
}

export default Subscribe;