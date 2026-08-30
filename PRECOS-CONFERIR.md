# Preços — o que conferir antes de publicar

Todos os valores saíram do Canva do cliente. O problema: aquelas páginas são
canvas com elementos posicionados livremente, então o texto sai do HTML **fora
de ordem**. O nome do modelo e o preço nem sempre vêm grudados, e em várias
páginas tive que inferir o par pela sequência.

Tudo fica em `assets/site.js`, no objeto `CATALOGO`. Cada linha é
`['nome', 'especificação', 'à vista', 'parcelado', 'etiqueta']`.

## Confiança alta — pode publicar

**Android** — nome, tela e preço aparecem grudados no Canva. 8 modelos.

**AirPods** — cada preço tem uma descrição única ao lado ("com cancelamento",
"sem cancelamento"), o que trava o par. 6 modelos.

**Mac, os cinco primeiros** — ancorei pelo código de modelo da Apple, que é
único e confirma a configuração:

| Modelo | Código | À vista |
|---|---|---|
| MacBook Pro M2 13,3" 8GB+256GB | A2338 | R$ 7.999 |
| MacBook Air M3 13,6" 24GB+512GB | A3113 | R$ 8.499 |
| MacBook Air M2 13,3" 16GB+256GB | A2681 | R$ 6.499 |
| MacBook Air M1 13,3" 8GB+128GB | A2337 | R$ 4.499 |
| MacBook Air M1 13,3" 16GB+1TB | A2337 | R$ 5.999 |

## Confiança média — dar uma olhada

**iPhone** — 35 modelos, lacrado e openbox. Peguei o menor preço de cada
modelo ("a partir de"), que é a leitura mais segura. Os armazenamentos maiores
ficaram de fora de propósito: o pareamento armazenamento ↔ preço não era
confiável.

**iPad** — a sequência ficou coerente (cada preço vem antes do nome do modelo,
e os valores fazem sentido na escada da linha), mas confirma. Em especial:
o iPad Air M4 só ficou com o 128GB, e o Air M3 herdou o 256GB de R$ 4.890.

**iMac M4 (R$ 15.499) e Mac Mini M4 (R$ 5.749)** — os preços estavam soltos
perto desses nomes. O Mac Mini está como "a partir de" porque havia um segundo
valor (R$ 6.749) com a mesma configuração descrita.

## Sem preço — estão como "Consultar"

Não achei par confiável. Ficam com "valor sob consulta", que é o mesmo que o
Canva faz em vários cards:

- MacBook Neo, Pro M5 Max, Pro M5 Pro, Pro M5, Air M5, Air M4, Pro M4
- Studio Display
- Apple Watch Ultra 3
- iPhone 15 Plus lacrado

**Apple Watch é o mais frágil da lista.** A página tem nove preços soltos
(R$ 1.799 a R$ 5.999) e cinco tamanhos de caixa, sem nada que amarre um ao
outro. Deixei Series 10 a partir de R$ 2.590 e SE 2 a partir de R$ 1.799,
que é a leitura mais provável, e o Ultra 3 sob consulta. Se o cliente te
passar a tabela real, é o primeiro lugar para corrigir.

## Um ponto de texto, não de preço

A página de pagamento do cliente diz que **a nota fiscal tem acréscimo de 4%**.
Como o Instagram anuncia "com nota fiscal", tirei a promessa de nota fiscal
da faixa de destaques da home e coloquei a condição real na página de garantia.
Vale alinhar com o cliente qual das duas versões ele quer comunicar.
