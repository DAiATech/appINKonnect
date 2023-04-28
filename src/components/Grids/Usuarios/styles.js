import { StyleSheet } from "react-native";
import fonts from "../../../styles/fonts";

export const styles = StyleSheet.create({
    box:{
        backgroundColor: '#fafafa',
        padding: 5,
        width: '100%',
        height: 50,
        justifyContent: "center",
        marginBottom: 10,
        zIndex: 11,
        borderRadius: 10,
    },

    centralizarModal:{    
        flex: 1,
        justifyContent: "center",    
        backgroundColor: 'rgba(0, 0, 0, 0.37)'
        },
    
        removeItem:{
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginRight: 10,
        marginTop: 15,
      },
    
      CardContainerModal:{
        backgroundColor: '#FAFAFA',
        marginBottom: 10,
        paddingHorizontal: 15,
        marginHorizontal: 15,
        paddingBottom:15,
        
    },
    
    ImagemModal:{  
            
            width:300,
            height:300,
            
        },
    
    
    Cliente:{
            fontFamily: fonts.text,
            fontSize: 18,
            marginBottom:12,
        },
    
        Valor:{
            fontFamily: fonts.text,
            fontSize: 15,            
            marginBottom: 5,
            color: '#3d3d3d',
        },
    
    
    ValorRes:{
            fontFamily: fonts.text,
            fontSize: 13,
            color: '#ff3333',
            marginBottom: 5,
        },
    
        Section:{
            flexDirection: 'row',
            alignItems: "center",
            marginTop: 5,
        },
    
        Entrada:{
            fontFamily: fonts.text,
            fontSize: 14,
            marginLeft: 20,
            color: 'gray',
        },
    
        Vencimento:{
            fontFamily: fonts.text,
            fontSize: 14,
            position: 'absolute',
            right: 0,
            color: 'gray',
        },
    
        Vencimento2:{
            position: 'absolute',
            right: 0,
            height:35,
            width:35,
            top:-50,
        },
    
    
     Footer:{
            alignItems: "center",
            justifyContent: "center",
            borderTopWidth: 0.5,
            borderTopColor: '#c1c1c1',
            padding: 7,
            marginTop: 12,
            width: '95%',
            alignSelf: "center",
        },
    
        FooterText:{
            fontFamily: fonts.text,
            fontSize: 16,
        },
    
        Icon:{
            position: 'absolute',
            left: -5,
        },

         viewImg:{  
        
        justifyContent: "center",   
        alignItems: "center",   
        margin:10,       
    },

    textoAbrir:{
        fontFamily: fonts.text,
        fontSize: 13,
        color: 'gray',
    },

    TextInput:{
        borderWidth: 0.5,
        borderColor: '#000',
        width: '100%',
        borderRadius: 5,
        padding: 10,
        marginBottom: 5,
        justifyContent: "center",
        marginHorizontal: 5,
        alignSelf: "center",
        backgroundColor: '#fff',
        height: 45,
    },

    TitleInputs:{
        fontFamily: fonts.text,
        fontSize: 18,
        color: "#000",
        marginLeft: 35,
        marginTop: 15,
    },

    Button:{
        backgroundColor: '#328fad',
        width: '60%',
        alignSelf: "center",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 20,
    },

    ButtonText:{
        fontSize: 20,
        color: '#fff',
        fontFamily: fonts.text,
    },
})