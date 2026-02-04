package com.matouq.backend.controller;

import com.matouq.backend.model.FAQ;
import com.matouq.backend.model.Program;
import com.matouq.backend.model.Testimonial;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class ContentController {

    @GetMapping("/programs")
    public List<Program> getPrograms(@RequestParam(defaultValue = "en") String lang) {
        if ("ar".equals(lang)) {
            return Arrays.asList(
                    new Program("الأكاديمية الرياضية", "تدرّب مع الأبطال. تركز برامجنا الرياضية على التطور البدني، الانضباط، والتميز التنافسي.",
                            Arrays.asList("تايكوندو وفنون قتالية", "تدريب لياقة بدنية احترافي", "مسابقات وطنية", "تنمية الشباب")),
                    new Program("معهد اللغات", "افتح أبواباً جديدة باللغات. فصول تفاعلية مصممة لتعزيز الطلاقة والثقة لجميع الأعمار.",
                            Arrays.asList("متحدثون أصليون خبراء", "دورات العربية والإنجليزية", "أندية محادثة", "مناهج معتمدة"))
            );
        }
        return Arrays.asList(
                new Program("Sports Academy", "Train with champions. Our sports programs focus on physical development, discipline, and competitive excellence.",
                        Arrays.asList("Taekwondo & Martial Arts", "Professional Fitness Training", "National Competitions", "Youth Development")),
                new Program("Language Institute", "Open new doors with language. Interactive classes designed to boost fluency and confidence for all ages.",
                        Arrays.asList("Expert Native Speakers", "Arabic & English Courses", "Conversational Clubs", "Certified Curriculum"))
        );
    }

    @GetMapping("/testimonials")
    public List<Testimonial> getTestimonials(@RequestParam(defaultValue = "en") String lang) {
        if ("ar".equals(lang)) {
            return Arrays.asList(
                    new Testimonial("تحسنت ثقة ابني بنفسه كثيراً بعد انضمامه لصفوف التايكوندو. المدربون رائعون حقاً.", "سارة م.", "ولية أمر", "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200"),
                    new Testimonial("دروس اللغة الإنجليزية ممتعة وفعالة. لاحظت تطوراً كبيراً في نطق ابنتي خلال شهرين فقط.", "أحمد ك.", "ولي أمر", "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200"),
                    new Testimonial("منشأة رائعة ومدربون محترفون. أطفالي يحبون المكان وينتظرون موعد التدريب بفارغ الصبر.", "خالد ع.", "ولي أمر", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200")
            );
        }
        return Arrays.asList(
                new Testimonial("My son's confidence improved so much after Taekwondo. The coaches are truly amazing.", "Sarah M.", "Parent", "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200"),
                new Testimonial("The English classes are fun and effective. Highly recommended!", "Ahmed K.", "Parent", "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200"),
                new Testimonial("Great facility and professional coaches. My kids love it here and look forward to every session.", "John D.", "Parent", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200")
        );
    }

    @GetMapping("/faqs")
    public List<FAQ> getFAQs(@RequestParam(defaultValue = "en") String lang) {
        if ("ar".equals(lang)) {
            return Arrays.asList(
                    new FAQ("ما هي الأعمار التي تقبلونها؟", "نقبل الأطفال والمراهقين من سن ٥ إلى ١٨ سنة في معظم برامجنا الرياضية واللغوية."),
                    new FAQ("هل المعلمون معتمدون؟", "نعم، جميع مدربينا ومعلمينا يحملون شهادات دولية معتمدة ولديهم سنوات من الخبرة في مجالات تخصصهم."),
                    new FAQ("كيف يمكنني التسجيل؟", "يمكنك زيارة مركزنا مباشرة لتعبئة استمارة التسجيل، أو الاتصال بنا عبر الهاتف لحجز موعد للمقابلة.")
            );
        }
        return Arrays.asList(
                new FAQ("What ages do you accept?", "We accept children and teenagers from 5 to 18 years old for most of our sports and language programs."),
                new FAQ("Are the teachers certified?", "Yes, all our coaches and teachers hold international certificates and have years of experience."),
                new FAQ("How do I register?", "You can visit our center directly to fill out the registration form, or call us to book an appointment.")
        );
    }
}
