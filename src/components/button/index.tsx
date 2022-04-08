import React from 'react';
import style from '../button/Button.module.scss';

class Button extends React.Component <{ texto: string }>{
    render() {
        return (
            <button className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Button;