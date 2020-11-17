import React from 'react'
import { Text, View, StyleSheet, SafeAreaView } from 'react-native'

import Mega from './components/Mega/Mega'
/*import Primeio from './components/Primeiro'
import FlexBoxV4 from './components/Layout/FlexboxV4'
import ListaDeProdutosV2 from './components/produtos/listaProdutosV2'
import CampoNome from './components/DigiteSeuNome'
import ListaDeProdutos from './components/produtos/listaProdutos'
import UsuarioLogado from './components/UsuarioLogado'
import Pai from './components/relacao/pai'
import Filho from './components/relacao/filho'
import ImparPar from './components/parImpar'
import Diferenciar from './components/Diferenciar'
import Contadorv2 from './components/contatador/contadorv2'
import Pai from './components/indireta/Pai'
import {Comp1, Comp2, Comp} from './components/Multi'
import Aleatorio from './components/aleatorio'
import Titulo from './components/Titulo'
import Botton from './components/botao'
import Contador from './components/contador'
import MinMax from './components/MinMax'*/

export default () => (
    <SafeAreaView style={style.App}>
        <Mega quantidadeNumeros/>
       {/* <Aleatorio min={0} max={0}/>
        <Text>Seu nome</Text>
        <CampoNome/>
        <ListaDeProdutosV2/>
        <UsuarioLogado usuario={{nome: "Fernando", email: "fernando@gmail.com"}}/>
        <UsuarioLogado usuario={{nome: "Jeo Vana", }}/>
        <UsuarioLogado usuario={{email: "jeo@gmail.com"}}/>
        <ImparPar num={8}/>
        <Pai>
            <Filho nome="Eduardo" sobrenome="Lemos"/>
            <Filho nome="Bia" sobrenome="Atriz"/>
            <Filho nome="Jason" sobrenome="Vorhees"/>
        </Pai>
        <Pai>
            <Filho nome="Tomas" sobrenome="Turbando"/>
            <Filho nome="Jacito" sobrenome="Pinto"/>
            <Filho nome="Deide" sobrenome="Costa"/>
        </Pai>
        <Diferenciar/>
        <Pai/>
        <Pai/>
        <Contador inicial={100} passo={15}/>
        <Contador inicial={0} passo={2}/>
        <Titulo principal="Titulo principal" secundario="Titulo secundaro"/>
       <Comp/>
        <Comp1/>
        <Comp2></Comp2>
        <Primeio/>*/}
    </SafeAreaView>
)

const style = StyleSheet.create({
    App:{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    Text:{
        fontSize: 24
    }
})