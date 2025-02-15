import React from "react"

const AboutUs = () => {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-12">
      <h1 className="mb-8 text-3xl font-medium text-[#8B0000]">О нас</h1>
      <div className="max-w-2xl space-y-6 text-gray-800">
        <p className="text-center leading-relaxed">
          Добро пожаловать в <span className="font-medium">Mejory</span>! Мы -
          ваш надежный источник элегантной одежды, созданной для того, чтобы
          вдохновлять на движение и вызывать уверенность в себе в своем танце.
          Наша команда стремится сочетать стиль и комфорт, чтобы каждая
          танцующая душа могла свободно выражать себя.
        </p>
        <p className="text-center leading-relaxed">
          <span className="font-medium">Mejory</span> предлагает широкий
          ассортимент продукции - от ярких платьев до стильных аксессуаров,
          которые помогут вам блистать на паркете и за его пределами. Мы
          используем только высококачественные материалы, чтобы обеспечить
          максимальный комфорт и долговечность.
        </p>
      </div>
    </section>
  )
}

export default AboutUs
