import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { getImageFromApi } from '../API/TMDBApi'
import FadeIn from '../Animations/FadeIn'

class FilmItem extends React.Component {

    _displayFavoriteImage(){
        if (this.props.isFilmFavorite){
            return (
                <Image
                source={require('../Images/ic_favorite.png')}
                style={styles.favorite_image}
                />
            )
        }
    }
    render() {
        const { film, displayDetailForFilm, isFavoriteFilm } = this.props
        return (
            <FadeIn>
            <TouchableOpacity
                style={styles.main_container}
                onPress={() => displayDetailForFilm(film.id)}>
                <Image
                    style={styles.image}
                    source={{uri: getImageFromApi(film.poster_path)}}
                />
                <View style={styles.content_container}>
                    <View style={styles.header_container}>
                        {this._displayFavoriteImage()}
                        <Text style={styles.title_text}> {film.title}</Text>
                        <Text style={styles.vote_text}>{film.vote_average}</Text>
                    </View>
                    <View style={styles.description_container}>
                        <Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>
                    </View>
                    <View style={styles.date_container}>
                        <Text style={styles.date_text}>Sorti le {film.release_date}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            </FadeIn>
        )
    }
}

const styles = StyleSheet.create({
    main_container:{
        flexDirection: 'row',
        height: 190
    },
    image: {
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: 'gray'
    },
    content_container: {
        flex: 1,
        margin: 5
    },
    header_container: {
        flex: 3,
        flexDirection: 'row'
    },
    title_text: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        flexWrap: 'wrap',
        paddingRight: 5
    },
    vote_text: {
        fontSize: 26,
        color: '#666666',
        fontWeight: "bold"
    },
    description_container: {
        flex: 7
    },
    description_text: {
        fontStyle: 'italic',
        color: '#666666'
    },
    date_container: {
        flex: 1
    },
    date_text: {
        textAlign: 'right',
        fontSize: 14
    },
    favorite_image: {
        width: 25,
        height: 25,
        marginRight: 5
    }
})

export default FilmItem
