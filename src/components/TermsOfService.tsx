import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  UserCheck, 
  CreditCard, 
  AlertTriangle, 
  Shield, 
  Users, 
  Calendar, 
  Lock,
  Copyright,
  CheckCircle,
  XCircle
} from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', duration: 0.6 }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto">
              <FileText className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Правила за участие и{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              обучение в курсовете
            </span>
          </h1>
          
          <p className="text-xl text-gray-600">
            Общи условия на Акава Академи
          </p>
        </motion.div>

        {/* Section 1: General Conditions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-6"
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Общи условия</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  <strong>1.1.</strong> Настоящите Общи условия уреждат взаимоотношенията между „Акава Академи" ЕООД 
                  (наричана по-долу <strong>Акава Академи</strong>), и всяко физическо лице (наричано по-долу <strong>Клиент</strong>), 
                  което записва дете/деца за участие в обучителни курсове.
                </p>
                <p>
                  <strong>1.2.</strong> С използването на сайта и/или попълване на формуляр за записване, Клиентът се 
                  съгласява с настоящите Общи условия.
                </p>
                <p>
                  <strong>1.3.</strong> Акава Академи си запазва правото да актуализира настоящите условия без предварително 
                  уведомление. Промените влизат в сила от датата на публикуване на сайта.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section 2: Registration and Participation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-6"
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Записване и участие</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  <strong>2.1.</strong> Записването за курс се извършва чрез попълване на формуляр на сайта или чрез 
                  директна комуникация по телефон/имейл.
                </p>
                <p>
                  <strong>2.2.</strong> При записване Клиентът трябва да предостави следната информация: име и възраст 
                  на детето, име и контакт на родителя (телефон и имейл), избран курс или модул.
                </p>
                <p>
                  <strong>2.3.</strong> Потвърждение за участие се получава след като е направено плащане на съответната такса.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section 3: Fees and Discounts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-6"
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Такси, начин на плащане и възможности за отстъпки</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  <strong>3.1.</strong> Таксите за курсовете са фиксирани и се обявяват предварително на сайта на Акава Академи.
                </p>
                <p>
                  <strong>3.2.</strong> Плащанията се извършват на място в офиса на Акава Академи – <strong>гр. Пловдив, 
                  бул. „6-ти септември" №144А</strong>, или по банков път, ако бъде предварително уговорено.
                </p>
                <p className="font-semibold">
                  <strong>3.3.</strong> Предлагат се следните отстъпки:
                </p>
                
                {/* Discounts Table */}
                <div className="overflow-x-auto mt-4">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
                        <th className="border border-gray-300 px-4 py-3 text-left">Тип отстъпка</th>
                        <th className="border border-gray-300 px-4 py-3 text-center">Размер</th>
                        <th className="border border-gray-300 px-4 py-3 text-left">Условия</th>
                        <th className="border border-gray-300 px-4 py-3 text-center">Комбинируемост</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-green-50">
                        <td className="border border-gray-300 px-4 py-3 font-semibold">Ранно записване</td>
                        <td className="border border-gray-300 px-4 py-3 text-center font-bold text-green-600">10%</td>
                        <td className="border border-gray-300 px-4 py-3">Записване до 1 месец преди началото</td>
                        <td className="border border-gray-300 px-4 py-3 text-center">
                          <span className="inline-flex items-center text-green-600">
                            <CheckCircle className="w-4 h-4 mr-1" /> Само със семейната
                          </span>
                        </td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="border border-gray-300 px-4 py-3 font-semibold">Семейна отстъпка</td>
                        <td className="border border-gray-300 px-4 py-3 text-center font-bold text-blue-600">5%</td>
                        <td className="border border-gray-300 px-4 py-3">За 2 или повече деца от едно семейство</td>
                        <td className="border border-gray-300 px-4 py-3 text-center">
                          <span className="inline-flex items-center text-green-600">
                            <CheckCircle className="w-4 h-4 mr-1" /> Само с ранно записване
                          </span>
                        </td>
                      </tr>
                      <tr className="bg-purple-50">
                        <td className="border border-gray-300 px-4 py-3 font-semibold">Цял курс</td>
                        <td className="border border-gray-300 px-4 py-3 text-center font-bold text-purple-600">8%</td>
                        <td className="border border-gray-300 px-4 py-3">За всички модули наведнъж</td>
                        <td className="border border-gray-300 px-4 py-3 text-center">
                          <span className="inline-flex items-center text-red-600">
                            <XCircle className="w-4 h-4 mr-1" /> Не се комбинира
                          </span>
                        </td>
                      </tr>
                      <tr className="bg-orange-50">
                        <td className="border border-gray-300 px-4 py-3 font-semibold">Повече от 1 модул</td>
                        <td className="border border-gray-300 px-4 py-3 text-center font-bold text-orange-600">8%</td>
                        <td className="border border-gray-300 px-4 py-3">За няколко модула през учебната година</td>
                        <td className="border border-gray-300 px-4 py-3 text-center">
                          <span className="inline-flex items-center text-red-600">
                            <XCircle className="w-4 h-4 mr-1" /> Не се комбинира
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-4">
                  <strong>3.4.</strong> Отстъпките не се комбинират извън изрично упоменатото.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section 4: Termination by Akava */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-6"
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-rose-500 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Прекратяване на обучението от страна на Акава Академи</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  <strong>4.1.</strong> Акава Академи си запазва правото да прекрати обучението на дете при:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>системни нарушения на правилата;</li>
                  <li>неподходящо поведение, застрашаващо останалите деца или преподавателите;</li>
                  <li>липса на комуникация или сътрудничество от страна на родителя.</li>
                </ul>
                <p>
                  <strong>4.2.</strong> В тези случаи сумата за оставащите занятия <strong>не се възстановява</strong>.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section 5: Client Withdrawal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-6"
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Отказ от обучението от страна на Клиента</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  <strong>5.1.</strong> Клиентът има право да се откаже от обучението <strong>преди началото на курса</strong>, 
                  като уведоми Акава Академи <strong>най-малко 5 работни дни предварително</strong>. В този случай заплатената 
                  такса се възстановява <strong>в пълен размер</strong>.
                </p>
                <p>
                  <strong>5.2.</strong> При отказ, заявен <strong>по-малко от 5 работни дни преди старта на курса</strong>, 
                  се удържа <strong>административна такса в размер на 20% от стойността на курса</strong>, а останалата сума се възстановява.
                </p>
                <p>
                  <strong>5.3.</strong> При отказ <strong>след започване на обучението</strong>, заплатената такса 
                  <strong> не подлежи на възстановяване</strong>, освен при <strong>доказани сериозни здравословни причини</strong>, 
                  удостоверени с <strong>официален медицински документ</strong>. В тези случаи Акава Академи може, по собствена преценка, 
                  да предложи:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>прехвърляне на участието в следваща група или модул;</li>
                  <li>издаване на ваучер за друг курс;</li>
                  <li>частично възстановяване на таксата (по преценка на Акава Академи).</li>
                </ul>
                <p>
                  <strong>5.4.</strong> Отказът трябва да бъде направен <strong>писмено</strong>, чрез имейл до 
                  info@akavaacademy.com или чрез контактната форма на сайта.
                </p>
                <p>
                  <strong>5.5.</strong> <strong>Неявяване без предварително уведомление</strong> се третира като отказ 
                  без право на възстановяване.
                </p>
                <p>
                  <strong>5.6.</strong> Ако курсистът доброволно прекъсне обучението по лични причини като промяна в графика, 
                  загуба на интерес, преместване в друг град, липса на транспорт или други семейни ангажименти, заплатената 
                  такса не подлежи на възстановяване.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section 6: Client Rights and Obligations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-6"
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Права и задължения на Клиента</h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <div>
                  <p className="font-semibold mb-2">Клиентът се задължава да:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>предостави коректна информация при записване;</li>
                    <li>осигури присъствието на детето в занятията;</li>
                    <li>спазва указанията за плащане и срокове;</li>
                    <li>се запознае с настоящите Общи условия.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Клиентът има право да:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>получава актуална информация относно курса;</li>
                    <li>заяви въпроси, коментари или сигнали към Акава Академи;</li>
                    <li>получи фактура или разписка при плащане.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section 7: Akava Rights and Obligations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-6"
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Права и задължения на Акава Академи</h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <div>
                  <p className="font-semibold mb-2">Акава Академи се задължава да:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>предостави качествено обучение в съответствие с обявената програма;</li>
                    <li>осигури безопасна и подкрепяща среда;</li>
                    <li>поддържа контакт с родителите за важна информация, отсъствия и напредък;</li>
                    <li>спазва изискванията на Закона за защита на личните данни.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Акава Академи има право да:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>прави промени в графика по уважителни причини;</li>
                    <li>откаже участие на дете при поведение, което нарушава учебния процес;</li>
                    <li>премести занятия онлайн при форсмажорни обстоятелства.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section 8: Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-6"
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. График на занятията</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  <strong>8.1.</strong> Курсовете се провеждат по предварително обявен график, който се съобщава на 
                  Клиентите по имейл и/или в сайта.
                </p>
                <p>
                  <strong>8.2.</strong> Акава Академи си запазва правото да прави промени в графика при необходимост 
                  (болест на преподавател, извънредни обстоятелства и др.).
                </p>
                <p>
                  <strong>8.3.</strong> Пропуснати занятия не подлежат на възстановяване или компенсиране, освен ако не 
                  е договорено друго предварително.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section 9: Behavior and Safety */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-6"
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Поведение и безопасност</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  <strong>9.1.</strong> Очакваме уважително и отговорно поведение от всички участници по време на занятията, 
                  включително към преподаватели, съучастници и имуществото на Акава Академи.
                </p>
                <p>
                  <strong>9.2.</strong> Участниците трябва да спазват всички инструкции, свързани с безопасността при работа 
                  с компютри, електронна техника и други учебни ресурси.
                </p>
                <p>
                  <strong>9.3.</strong> Акава Академи осигурява безопасна учебна среда и въвежда участниците в основни правила 
                  за безопасна работа с техниката в началото на всеки курс.
                </p>
                <p>
                  <strong>9.4.</strong> В случай на системни нарушения на правилата, грубо поведение, както и действия, 
                  застрашаващи безопасността на други участници или преподавателя, Акава Академи си запазва правото да 
                  прекрати участието на детето без възстановяване на таксата.
                </p>
                <p>
                  <strong>9.5.</strong> При умишлено или явно небрежно увреждане на техника или друго имущество на Акава Академи, 
                  родителят/настойникът на участника носи отговорност за покриване на причинените щети.
                </p>
                <p>
                  <strong>9.6.</strong> При увреждане на техника или друго имущество на Акава Академи:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Ако увреждането е <strong>случайно</strong> и не е резултат от груба небрежност или неподчинение на 
                    инструкции, Акава Академи поема отговорността и не търси компенсация от родителя/настойника.</li>
                  <li>Ако увреждането е <strong>умишлено</strong> или вследствие на <strong>груба небрежност</strong> 
                    (например натрапчиво поведение въпреки предупреждения, игра с техника не по предназначение, игнориране 
                    на указанията), родителят/настойникът поема отговорността за възстановяване на причинените щети по 
                    пазарна стойност на повреденото имущество.</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section 10: Data Protection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-6"
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <Lock className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Защита на личните данни</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  Обработката на лични данни се извършва в съответствие с Регламент (ЕС) 2016/679 (GDPR) и българското законодателство.
                </p>
                <p>
                  Всички предоставени лични данни се събират и съхраняват съгласно{' '}
                  <Link to="/privacy-policy" className="text-primary-600 hover:text-primary-700 font-semibold underline">
                    Политиката за поверителност на Акава Академи
                  </Link>.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section 11: Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-6"
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Copyright className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Авторски права</h2>
              <div className="text-gray-700 leading-relaxed">
                <p>
                  Материалите, предоставени по време на курсовете, са собственост на Акава Академи и не могат да бъдат 
                  разпространявани без разрешение.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-8 text-center"
        >
          <Link
            to="/"
            className="inline-block text-primary-600 hover:text-primary-700 font-semibold"
          >
            ← Върни се към началната страница
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;

