const ContactsTemplate = () => {
  return (
    <div className="flex max-w-6xl flex-col items-center py-40 md:mx-auto md:flex-row md:items-start">
      <h1 className="mb-8 w-1/3 text-center font-gilroy text-3xl font-medium text-[#8B0000]">
        Контакты
      </h1>
      <div className="w-2/3 max-w-2xl space-y-6 py-10 font-gilroy text-gray-800">
        <p className="text-center leading-relaxed">
          Добро пожаловать в{" "}
          <span className="font-merriweather font-medium">Mejory</span>! Мы -
          ваш надежный источник элегантной одежды, созданной для того, чтобы
          вдохновлять на движение и вызывать уверенность в себе в своем танце.
          Наша команда стремится сочетать стиль и комфорт, чтобы каждая
          танцующая душа могла свободно выражать себя.
        </p>
        <p className="text-center leading-relaxed">
          <span className="font-merriweather">Mejory</span> предлагает широкий
          ассортимент продукции - от ярких платьев до стильных аксессуаров,
          которые помогут вам блистать на паркете и за его пределами. Мы
          используем только высококачественные материалы, чтобы обеспечить
          максимальный комфорт и долговечность.
        </p>
      </div>
    </div>
  )
}

export default ContactsTemplate
