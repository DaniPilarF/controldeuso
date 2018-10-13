import React, {Component} from 'react';
import StarRateIcon from '@material-ui/icons/StarRate';
import FlagIcon from 'react-flag-kit/lib/FlagIcon';
import {getScoreColor, getStarsCategory} from "../utils/Category";

class Card extends Component {

    renderStars = (stars) => {
        // Si stars es menor que x: active
        return [1, 2, 3, 4].map((star) => <StarRateIcon key={star} className={ stars >= star ? 'active' : 'inactive' } />);
    };


    render (){
        const cardInfo = this.props.cardInfo;

        const scoreColor = getScoreColor(cardInfo.score);
        const stars = getStarsCategory(cardInfo.categoria);


        //TO DO: hacer renders de cada pedacito para lectura


        return (
            <div className='card' style={{borderColor: scoreColor}}>
                <div className='container layout-row'>
                    <div className='content'>
                        <div className='subtitle'>{cardInfo.instalado}</div>
                        <div>
                            <span className='title'>{cardInfo.cliente}</span>
                            <FlagIcon code={cardInfo.pais} className='flag'/>
                        </div>
                        <div className='category layout-row'>
                            <div className='stars'>
                                {this.renderStars(stars)}
                            </div>
                            <div className='subtitle'>CLIENTE {cardInfo.categoria}</div>
                           <div></div>
                        </div>
                        <div className='version'>Versión <b>{cardInfo.version}</b></div>
                    </div>
                    <div className='score-container'>
                        <div className='score'
                             style={{ borderColor: scoreColor, color: scoreColor }}>
                             {cardInfo.score}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;
