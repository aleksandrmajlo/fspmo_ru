<template>
    <div class="s-calendar__caption">
        <div class="s-calendar__caption-title" :style="{backgroundColor:$store.state.eventactive.color}">
            {{$store.state.eventactive.sport}}
        </div>
        <div class="s-calendar__caption-body">
            <div class="mb-3">
                <div class="h2 strong text-primary ttu pb-1"> {{$store.state.eventactive.title}}</div>
                <div class="h4 text-secondary">{{$store.state.eventactive.description}}</div>
            </div>
            <div class="mb-3">
                <div class="s-calendar__text">
                    <div class="s-calendar__icon-wrap">
                        <svg class="icon icon-calendar ">
                            <use xlink:href="/img/svg/sprite.svg#calendar"></use>
                        </svg>
                    </div>
                   {{$store.state.eventactive.text_date}}
                </div>
                <div class="s-calendar__text">
                    <div class="s-calendar__icon-wrap">
                        <svg class="icon icon-mark ">
                            <use xlink:href="/img/svg/sprite.svg#mark"></use>
                        </svg>
                    </div>
                    {{$store.state.eventactive.place}}
                </div>
            </div>
            <div class="row justify-content-between">
                <div class="col-auto">
                <a  @click.prevent="prev" v-show="$store.state.indexActive>0" class="s-calendar__arrow-foot s-calendar__arrow-foot--left row" href="#">
                    <div class="col-auto">
                        <svg class="icon icon-chevron-left ">
                            <use xlink:href="/img/svg/sprite.svg#chevron-left"></use>
                        </svg>
                    </div>
                    <div class="col">
                        <small>Предыдущая дисциплина</small>
                    </div>
                </a>
                </div>
                <div class="col-auto">
                    <a @click.prevent="next" v-show="last" class="s-calendar__arrow-foot s-calendar__arrow-foot--right row" href="#">
                    <div class="col">
                        <small>Следующая дисциплина</small>
                    </div>
                    <div class="col-auto">
                        <svg class="icon icon-chevron-right ">
                            <use xlink:href="/img/svg/sprite.svg#chevron-right"></use>
                        </svg>
                    </div>
                </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        computed:{
            last(){
                if((this.$store.state.indexActive+1)==this.$store.state.date.length){
                    return false;
                }
                return true;
            }
        },
        methods:{
            next(){
                 this.$store.commit('next')
            },
            prev(){
                this.$store.commit('prev')
            }
        }
    }
</script>

