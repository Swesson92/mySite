import React from 'react';
import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


import cykel from '../assets/images/cykel.JPG';
import havet from '../assets/images/havet.jpg';
import gbg from '../assets/images/gbg.jpg';


class Carousel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Image bank',
                    subTitle: 'A lot of different photos taken by me',
                    imgSrc: cykel ,
                    link: 'https://swesson92.imgur.com/all',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Robin Svensson',
                    subTitle: 'YouTube channel',
                    imgSrc: havet ,
                    link: 'https://www.youtube.com/channel/UCTVRBrZVcraAzcWqRTchVTA/featured?view_as=subscriber',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Feel free to contact me for any business ideas.',
                    subTitle: 'Email: robin.svensson06@gmail.com',
                    imgSrc: gbg ,
                  //  link: 'https://github.com/garrettlove8/evverest',
                    selected: false
                },
            ]
        }
    }

    //Metod för att endast visa info om 1 card i taget
    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }



    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        });
    }


    render(){
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}


export default Carousel;