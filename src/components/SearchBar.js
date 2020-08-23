import React, {Component} from 'react';
import {AutoComplete, Input, Icon} from 'antd';
import nba from '../nba-client';
import {PROFILE_PIC_URL_PREFIX} from '../constants';

const Option = AutoComplete.Option;

class SearchBar extends Component {
    state = {
        dataSource: [],
    }


    render() {
        const {dataSource} = this.state;
        // console.log(dataSource);

        const options = dataSource.map((player) => (
            <Option key={player.playerId}
                    value={player.fullName}
                    className="player-option">
                <img
                    className="player-option-image"
                    alt={player.fullName}
                    src={`${PROFILE_PIC_URL_PREFIX}/${player.playerId}.png`}
                />
                <span
                    className="player-option-label">{player.fullName}</span>
            </Option>
        ));

        return (
            <AutoComplete
                className="search-bar"
                dataSource={options}
                onSelect={this.onSelect}
                onSearch={this.handleSearch}
                placeholder="Search NBA Player"
                size="large"
                optionLabelProp="value"
            >
                <Input suffix={<Icon type="search" className="certain-category-icon"/>}/>
            </AutoComplete>
        );
    }

    handleSearch = (value) => {
        // console.log(value)
        // const players = nba.searchPlayers(value);
        // console.log(players);

        this.setState({
            dataSource: !value ?
                [] : nba.searchPlayers(value)
                    .map(player => ({
                        playerId: player.playerId,
                        fullName: player.fullName
                    }))
        });
    }

    onSelect = (name) => {
        // console.log(value);
        this.props.handleSelectPlayer(name);
    }

}

export default SearchBar;