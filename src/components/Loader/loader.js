export const getData = async () => {
    const topicsData = await fetch('https://openapi.programming-hero.com/api/quiz')
    const topics = await topicsData.json()
    return topics;

}