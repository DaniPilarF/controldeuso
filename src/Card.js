import React, {Component} from 'react';
import StarRateIcon from '@material-ui/icons/StarRate';
import FlagIcon from 'react-flag-kit/lib/FlagIcon';

class Card extends Component {

    getScore = (score) => {

        if (score <= 3) {
            return '#FF734E';
        } else if (score <= 6) {
            return '#EFDB5B ';
        } else if (score <= 10) {
            return '#5BEFB8';
        }
        
             
    }

    render (){
        return (
            <div className='card' style={{borderColor:this.getScore(this.props.cardInfo.score)}}>
                <div className='container layout-row'>
                    <div className='content'>
                        <div className='subtitle'>{this.props.cardInfo.instalado}</div>
                        <div>
                            <span className='title'>{this.props.cardInfo.cliente}</span>
                            <FlagIcon code={this.props.cardInfo.pais} className='flag'/>
                        </div>
                        <div className='category layout-row'>
                            <div className='stars'>
                                <StarRateIcon className="active"/>
                                <StarRateIcon className="active"/>
                                <StarRateIcon className="inactive"/>
                                <StarRateIcon className="inactive"/>
                            </div>
                            <div className='subtitle'>CLIENTE B</div>
                           <div></div>
                        </div>
                        <div className='version'>Versión <b>{this.props.cardInfo.version}</b></div>
                    </div>
                    <div className='score-container'>
                        <div className='score' 
                             style={{borderColor:this.getScore(this.props.cardInfo.score),color: this.getScore(this.props.cardInfo.score)}}>
                             {this.props.cardInfo.score}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;