import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export const styles = StyleSheet.create({
	generalButtonText: {
		color: "#121212",
		textAlign: "center",
		paddingTop: 5,
	},	
	generalButtonTO: {
		width: 220,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 6,
		borderWidth: 1,
		borderStyle: 'solid',
		marginBottom: 30,
		flexDirection: 'row',
		backgroundColor: 'white',
		borderColor: 'white',
		marginTop: 10,
		alignSelf: 'stretch',
	},
	mainContainer: {
		padding: 30,
		marginTop: 65,
		flexDirection: 'column',
		justifyContent: 'center',
		alignContent: 'center',
	},
	/*
	 * Scanner
	 */
	scannerContainer: {
        flex: 1, 
        height: 200,
        flexDirection: 'column',
        justifyContent: 'center',
    },
	/*
	 * Map
	 */
	mapContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center'
	},
	mapDisplay: {
		width: '100%',
		height: '100%',
	},
	/*
	 * Ratings
	 */
    ratingsContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.OS === 'ios' ? 20 : 0,
    },
    childView: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30,
    },
    ratingsButton: {
        width: '80%',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30,
        padding: 15,
        backgroundColor: '#d3d3d3',
    },
    starImage: {
        width: 40,
        height: 40,
        resizeMode: 'cover',
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 23,
        color: '#000',
        marginTop: 15,
    },
    textStyleSmall: {
        textAlign: 'center',
        fontSize: 16,
        color: '#000',
        marginTop: 15,
    },
    textarea: {
		color: '#121212',
        textAlign: 'left',
        width: '100%',
        marginTop: 30,
        padding: 5,
        borderRadius: 2,
        borderColor: "#ccc",
        borderWidth: 1
    },
    commentsForm: {
        width: '80%',
        alignItems: 'center',
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 2,
        borderRadius: 5
    },
    italic: {
        fontStyle: 'italic'
    },
	/*
	 * NewPrice
	 */
	newPriceContainer: {
		flex: 1, 
		//justifyContent: 'center',
		marginTop: 40,
		alignItems: 'center'
	},
	data: {
		width: 220,
		height: 23,
	},
	icon: {
		fontSize: 20,
		opacity: 0.5,
		alignSelf: 'flex-end',
		marginBottom: 1,
	},
	input: {
		width: 193,
		height: 15,
		textAlign: 'left',
		marginLeft: 6,
		marginTop: 6,
	},
	iconRow: {
		height: 21,
		flexDirection: 'row',
		marginRight: 1,
	},
	line: {
		width: 218,
		height: 1,
		backgroundColor: '#060606',
		opacity: 0.25,
		marginTop: 1,
		marginLeft: 2,
	},
	submit: {
		width: 100,
		height: 25,
		borderWidth: 2,
		marginTop: 10,
		textAlign: 'center',
		alignSelf: 'center',
	},

	/*
     * UserLists
     */
    newList: {
        width: '65%',
        borderWidth: 1,
        marginTop: 1,
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center',
        color: '#121212',
        padding: 20
    },
    newListForm: {
        borderWidth: 1,
        borderColor: '#000000',
        width: '80%', 
        fontSize: 18,
        textAlign: 'center',
    },
    
    /*
     * ListDetails
     */
    buttons: {
        fontSize: 18,
        color: "#121212",
        width: '35%', 
        padding: 15,
        borderWidth: StyleSheet.hairlineWidth,
        },
    /*
     * Login
     */
	container: {
		flex: 1,
		alignItems: 'center',
	},
	pryce: {
		flex: 1,
		fontSize: 70,
		textAlign: 'center',
		paddingTop: 60,
	},
	loginInfo: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 2
	},
	inputRow: {
		width: 220,
		height: 30,
		marginBottom: 30,
		flexDirection: 'row'
	},
	inputIcon: {
		fontSize: 30,
		alignSelf: 'flex-end',
		justifyContent: 'flex-end',
	},
	inputField: {
		width: 193,
		height: "100%",
		color: '#121212',
		textAlign: 'left',
		fontSize: 18,
		marginLeft: 6,
		borderBottomWidth: 1,
		borderBottomColor: '#060606'
	},
	createAccount: {
		width: 168,
		height: 16,
		flexDirection: 'row',
		flex: 1,
		alignSelf: 'center',
	},
	newText: {
		color: '#121212',
		fontSize: 14,
		marginTop: 2,
	},
	createAccountHere: {
		top: 2,
		left: 0,
		color: '#126ef7',
		fontSize: 14,
	},
	continueAsGuest: {
		width: 125,
		height: 18,
		color: '#126ef7',
		fontSize: 14,
		marginBottom: 57,
    },
    /*
     * Register
     */ 
	form: {
		alignItems: 'center',
	},
	buttonContainer: {
		width: 161,
		height: 32,
		borderRadius: 6,
		borderColor: "rgba(0,0,0,0.65)",
		borderWidth: 1,
		borderStyle: "solid",
	},
	unInput: {
		width: 193,
		height: 15,
		color: '#121212',
		textAlign: 'left',
		marginLeft: 6,
		marginTop: 6,
	},
	unLine: {
		width: 218,
		height: 1,
		backgroundColor: '#060606',
		opacity: 0.25,
		marginTop: 1,
		marginLeft: 2,
	},
	password: {
		width: 220,
		height: 23,
		marginTop: 19,
	},
	pwInput: {
		width: 193,
		height: 15,
		color: '#121212',
		textAlign: 'left',
		marginLeft: 6,
		marginTop: 6,
	},
	pwLine: {
		width: 218,
		height: 1,
		backgroundColor: '#060606',
		opacity: 0.25,
		marginTop: 1,
		marginLeft: 2,
	},
	/*
	 * ItemInfo
	 */
	containerItemInfo: {
		flex: 1,
		justifyContent: 'center',
		paddingTop: Constants.statusBarHeight,
		backgroundColor: '#ecf0f1',
		padding: 8,
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
    },
    description: {
        fontSize: 12,
        alignContent: 'flex-start',
    },
	/***********
	 * NewItem
	 */
	newItemDescription: {
		color: '#121212',
		alignContent: 'flex-start',
		textAlign: 'left',
		width: '100%',
		borderRadius: 2,
		borderColor: '#ccc',
		borderWidth: 1,
		marginBottom: 30,
		height: 140,
	},
	/* seems to have no effect on store selector */
	storeSelect: {
		fontSize: 16,
		paddingVertical: 12,
		paddingHorizontal: 10,
		borderWidth: 1,
		borderColor: 'gray',
		borderRadius: 4,
		color: 'green',
		paddingRight: 30,
	},
	submit: {
		width: 100,
		height: 25,
		borderWidth: 2,
		marginTop: 10,
		textAlign: 'center',
		alignSelf: 'center',
	},
	/*********** 
	 * Search
	 */
	searchContainer: {
		flex: 1,
		padding: 30,
		marginTop: 65,
		flexDirection: 'column',
		justifyContent: 'center',
	},
	title: {
		flex: 1,
		fontSize: 25,
		textAlign: 'center',
		paddingTop: 60,
	},
	searchInput: {
		padding: 4,
		fontSize: 18,
		borderBottomWidth: 1,
		borderColor: 'black',
		borderRadius: 4,
	},
	buttonText: {
		fontSize: 20,
		color: '#111',
		alignSelf: 'center',
	},
	button: {
		flexDirection: 'row',
		backgroundColor: 'white',
		borderColor: 'white',
		borderWidth: 1,
		borderRadius: 8,
		marginBottom: 10,
		marginTop: 10,
		alignSelf: 'stretch',
		justifyContent: 'center',
	},
	/*
	 * User
	 */
	userContainer: {
		marginLeft: 5
	},
	username: {
		fontSize: 30,
		fontWeight: 'bold',
		textDecorationLine: 'underline',
		marginBottom: 30
	},
	userButton: {
		width: '50%',
		height: 30,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#d3d3d3',
		marginBottom: 30
	},
	/*
	 * Review
	 */
	itemName1: {
		width: 286,
		height: 49,
		color: "#121212",
		fontSize: 40,
		textAlign: "center",
		marginTop: 76,
		alignSelf: "center"
	},
	group1: {
		width: 297,
		height: 164,
		marginTop: 44,
		alignSelf: "center"
	},
	reviews: {
		width: 297,
		height: 25,
		color: "#121212",
		fontSize: 20,
	},
	description2: {
		width: 297,
		height: 434,
		color: "#121212",
		fontSize: 20,
	},
	store: {
		width: 131,
		height: 29,
		color: '#121212',
		fontSize: 30,
		textAlign: 'center',
	},
	addPriceButton: {
		fontSize: 18,
		color: '#111',
		alignSelf: 'center',
	},
	columns: {
		flex: 1,
		borderBottomWidth: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	}
});



