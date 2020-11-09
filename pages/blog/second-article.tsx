import React from "react"
import Head from 'next/head'

import Image from "react-bootstrap/Image"

import { Layout } from "../layout"


const secondArticle: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Les gros chats, ça aime la viande !</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container article-container">
        <h1>Les gros chats, ça aime la viande !</h1>
        <h5>Mon experience en tant que propriétaire d'un gros chat.<br />En appartement...</h5>

        <Image src="https://picsum.photos/id/1074/5472/3648" fluid />

        <h4 className="article-title">Gruik, un chat pas comme les autres !</h4>
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magni amet, eligendi ex voluptatem nulla optio quo suscipit excepturi vel! Vel asperiores exercitationem veniam nihil in iusto facere possimus saepe, deserunt nisi dolor ullam explicabo quam ipsa nemo soluta maxime? Quis distinctio deleniti est vero, atque architecto vel quidem quam delectus, voluptatibus quaerat similique aliquid, esse placeat cumque totam eveniet labore saepe illo officiis et a alias! Minima ducimus doloribus, porro totam mollitia esse reprehenderit atque praesentium, obcaecati, quos ullam accusamus nam eos fuga tenetur! Soluta ducimus similique fuga dolores neque, aperiam iste aspernatur vel in! Dicta perspiciatis totam quidem.</p>

        <h4 className="article-title">Quand l'appetit va, tout va !</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam deleniti maiores nihil praesentium soluta beatae unde animi, dignissimos odit impedit magni officiis repudiandae dicta iste nesciunt autem vel, alias ipsum ipsa totam. Nobis animi ipsam alias eum quasi perferendis, labore ut. Alias, saepe exercitationem nisi dicta qui quis? Ex, corrupti?</p>

        <h4 className="article-title">Le jour où il a mangé mon chien et ma femme</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eos ipsam impedit magni deserunt deleniti in, ratione optio, ipsum enim illum. Ullam temporibus non necessitatibus nihil rerum eaque ad ut!</p>

        <h4 className="article-title">Adieu les emmerdes avec les voisins ! Adieu les voisins aussi</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem impedit veniam possimus laboriosam cupiditate doloribus, nemo quae. Itaque commodi eum pariatur dignissimos odit suscipit blanditiis perferendis non? Nihil et neque modi distinctio architecto, necessitatibus nesciunt quas sint reprehenderit, voluptatum dolor.</p>
      </div>
    </Layout>
  )
}

export default secondArticle;