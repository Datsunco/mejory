const DeliveryTemplate = () => {
  return (
    <div className="flex max-w-6xl flex-col items-center py-20 md:mx-auto md:flex-row md:items-start md:py-40">
      <h1 className="mb-8 w-1/3 text-center font-gilroy text-3xl font-medium text-[#8B0000]">
        Доставка
      </h1>
      <div className="w-2/3 max-w-2xl space-y-6 py-10 font-gilroy text-gray-800">
        <section>
          <h2 className="mb-3 text-lg font-medium text-[#800000]">
            Доставка по всей России
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Осуществляется транспортной компанией СДЭК или другими удобными
              для вас способами
            </li>
            <li>Расходы по отправке товара несет покупатель</li>
            <li>Предоплата составляет 100%</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-medium text-[#800000]">
            Доставка в другие страны
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Осуществляется заранее обговоренными с менеджером транспортными
              компаниями.
            </li>
            <li>Расходы по отправке товара несет покупатель</li>
            <li>Предоплата составляет 100%</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-medium text-[#800000]">
            Обмен и возврат
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Возможен в течение 5-ти календарных дней с момента получения
              товара
            </li>
            <li>При условии, что товар остается в первоначальном виде</li>
            <li>
              Расходы по отправке товара покупатель осуществляет за свой счет
            </li>
          </ul>
        </section>

        <p className="mt-6 text-center">
          При осуществлении обмена или возврата товара, покупателю нужно
          связаться с нами любыми удобными для него способами
        </p>
      </div>
    </div>
  )
}

export default DeliveryTemplate
