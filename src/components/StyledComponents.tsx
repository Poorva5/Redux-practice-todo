import { styled } from "@mui/material";


export const TodoWrapper = styled("div")(() => ({
    display: 'flex',
    justifyContent: 'center',
    height: '100vh',
    alignItems: 'center',
    backgroundImage: 'linear-gradient(90deg, #43C6AC 0%, #F8FFAE 100%)'
}));


export const TodoContainer = styled("div")(() => ({
    backgroundColor: '#fff',
    padding: '40px 20px',
    borderRadius: '5px'
}));

export const StyledHeading = styled("div")(() => ({
    fontSize: '28px',
    fontWeight: '500',
    paddingBottom: '18px'
}));

export const StyledInput = styled("input")(() => ({
    width: '250px',
    height: '35px',
    marginRight: '5px',
    border: '1px solid #f0f0f0',
    borderRadius: '3px',
    paddingLeft: '10px',
    '::placeholder': {
        color: '#999',
        fontSize: '16px',

    },
}));

export const StyledButton = styled("button")(() => ({
    backgroundColor: '#8f49e9',
    border: '1px solid #8f49e9',
    borderRadius: '3px',
    cursor: 'pointer'
}));

export const StyledTodo = styled("div")(() => ({
    backgroundColor: '#f2f2f2',
    border: '1px solid #f2f2f2',
    width: '100%',
    height: '35px',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '10px'
}));

export const StyledDeleteButton = styled("button")(() => ({
    width: '45px',
    border: '1px solid #e74d3d',
    borderRadius: '0px 3px 3px 0px',
    backgroundColor: '#e74d3d',
    cursor: 'pointer'
}));

export const StyledText = styled("div")(() => ({
    fontSize: '16px',
    marginTop: '30px',
    color: '#3e443a'
}));