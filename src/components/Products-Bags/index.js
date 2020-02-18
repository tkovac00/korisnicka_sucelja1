import React, { Component } from "react";
import styles from "./styles.module.css";
import { Link } from 'gatsby';
import Fuse from 'fuse.js';
import Lodash from 'lodash';
import SearchIcon from './SearchIcon';
import Card2 from '../Card2'

class FilteredClothes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: "",
            sortName: false
        };

        const options = {
            threshold: 0.3,
            location: 0,
            distance: 1000,
            maxPatternLength: 32,
            minMatchCharLength: 1,
            keys: ["node.id"]
        };
        this.fuse = new Fuse(props.bags, options);
    }
    onChange = event => this.setState({ search: event.target.value });
    render() {
        const { bags } = this.props;
        const { search } = this.state;

        let searchResults = Lodash.orderBy(bags);

        if (search.length > 0) {
            searchResults = this.fuse.search(search);
        }
        const bagsList = searchResults.map((data) => {
            const id = data.node.id;
            const image = data.node.image;
            const price = data.node.price;
            const link = data.node.link;


            return (
                <Link to={`Bag/${link}`}>
                    <Card2 productName={id} productPrice={price} source={image.src}></Card2>
                    </Link>
                

            );
        });
        return (
            <>
            
            <h1 style={{ textAlign: 'center', marginTop: '-20px', opacity: '0.8' }}>Bags</h1>
            <hr style={{ border: '0.5px solid black', opacity: '0.8', marginTop: '15px' }} />
            <div className={styles.InputContainer}>
                <label className={styles.Label}>
                    <input
                        className={styles.Input}
                        type="text"
                        value={this.state.search}
                        onChange={this.onChange}
                        placeholder="Search product"
                    />
                    <SearchIcon className={styles.SearchIcon} />

                </label>

            </div>
           



            <div className={styles.Main}>{bagsList}</div>
                        
                      
                
            </>
        );


    }

}
export default FilteredClothes;