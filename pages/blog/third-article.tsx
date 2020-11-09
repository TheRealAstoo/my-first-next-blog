import React from "react"
import Head from 'next/head'

import Image from "react-bootstrap/Image"

import { Layout } from "../layout"


const thirdArticle: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Apprendre avec Dr Strange</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container article-container">
        <h1>Apprendre avec Dr Strange</h1>
        <h5>Mon experience en tant qu'élève de Dr Strange<br />Et comment j'ai appris à faire des cercles avec mes mains</h5>

        <Image src="https://picsum.photos/id/1079/4496/3000" fluid />

        <h4 className="article-title">Ne faites pas attention au mec avec son parapluie</h4>
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magni amet, eligendi ex voluptatem nulla optio quo suscipit excepturi vel! Vel asperiores exercitationem veniam nihil in iusto facere possimus saepe, deserunt nisi dolor ullam explicabo quam ipsa nemo soluta maxime? Quis distinctio deleniti est vero, atque architecto vel quidem quam delectus, voluptatibus quaerat similique aliquid, esse placeat cumque totam eveniet labore saepe illo officiis et a alias! Minima ducimus doloribus, porro totam mollitia esse reprehenderit atque praesentium, obcaecati, quos ullam accusamus nam eos fuga tenetur! Soluta ducimus similique fuga dolores neque, aperiam iste aspernatur vel in! Dicta perspiciatis totam quidem.</p>

        <h4 className="article-title">Faire des cercles dans des cercles.. Tout un art !</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam deleniti maiores nihil praesentium soluta beatae unde animi, dignissimos odit impedit magni officiis repudiandae dicta iste nesciunt autem vel, alias ipsum ipsa totam. Nobis animi ipsam alias eum quasi perferendis, labore ut. Alias, saepe exercitationem nisi dicta qui quis? Ex, corrupti?</p>

        <h4 className="article-title">La magie pour les nuls</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eos ipsam impedit magni deserunt deleniti in, ratione optio, ipsum enim illum. Ullam temporibus non necessitatibus nihil rerum eaque ad ut!</p>

        <h4 className="article-title">Non, je n'irai pas sauver le monde !</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem impedit veniam possimus laboriosam cupiditate doloribus, nemo quae. Itaque commodi eum pariatur dignissimos odit suscipit blanditiis perferendis non? Nihil et neque modi distinctio architecto, necessitatibus nesciunt quas sint reprehenderit, voluptatum dolor.</p>
      </div>
    </Layout>
  )
}

export default thirdArticle;