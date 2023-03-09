import styled from "@emotion/styled"
import { Box } from "@mui/system"  

export const CustomBox = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.secondary.main,
	color: theme.palette.secondary.contrastText
}))
