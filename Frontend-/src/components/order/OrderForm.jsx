import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSearchParams } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { social } from "@/data/outlets";
import { cn } from "@/lib/utils";
const schema = z.object({
    name: z.string().trim().min(2, "Please enter your name").max(80),
    phone: z.string().trim().min(10, "Enter a valid phone").max(15),
    email: z.string().trim().email("Invalid email").max(120).optional().or(z.literal("")),
    fulfilment: z.enum(["pickup-civil-lines", "pickup-s-square", "delivery"]),
    date: z.string().min(1, "Pick a date"),
    time: z.string().min(1, "Pick a time"),
    cakeType: z.string().min(1, "Choose a type"),
    flavour: z.string().trim().min(2, "Mention a flavour").max(80),
    size: z.enum(["0.5", "1", "1.5", "2", "3", "Other"]),
    eggless: z.boolean(),
    message: z.string().trim().max(80, "Keep cake messages under 80 chars").optional().or(z.literal("")),
    notes: z.string().trim().max(500, "Keep notes under 500 chars").optional().or(z.literal("")),
});
const inputCls = "w-full bg-cream border border-transparent focus:border-foreground focus:outline-none px-4 py-3 text-sm";
const labelCls = "eyebrow block mb-2";
const errCls = "text-xs text-destructive mt-1.5";
export const OrderForm = () => {
    const [params] = useSearchParams();
    const presetCake = params.get("cake") || "";
    const { register, handleSubmit, setValue, formState: { errors, isSubmitting }, } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            fulfilment: "pickup-civil-lines",
            cakeType: presetCake ? "Signature" : "",
            flavour: presetCake,
            size: "1",
            eggless: false,
        },
    });
    useEffect(() => {
        if (presetCake) {
            setValue("flavour", presetCake);
            setValue("cakeType", "Signature");
        }
    }, [presetCake, setValue]);
    const onSubmit = (data) => {
        const lines = [
            `*New Cake Order — The Cake Company*`,
            ``,
            `*Name:* ${data.name}`,
            `*Phone:* ${data.phone}`,
            data.email ? `*Email:* ${data.email}` : "",
            `*Fulfilment:* ${data.fulfilment}`,
            `*When:* ${data.date} at ${data.time}`,
            ``,
            `*Cake type:* ${data.cakeType}`,
            `*Flavour:* ${data.flavour}`,
            `*Size:* ${data.size} kg`,
            `*Eggless:* ${data.eggless ? "Yes" : "No"}`,
            data.message ? `*Message on cake:* "${data.message}"` : "",
            data.notes ? `*Notes:* ${data.notes}` : "",
        ].filter(Boolean).join("\n");
        const url = `https://wa.me/${social.whatsapp}?text=${encodeURIComponent(lines)}`;
        window.open(url, "_blank", "noopener,noreferrer");
        toast({
            title: "Order details ready on WhatsApp",
            description: "We'll confirm price & availability within minutes.",
        });
    };
    return (<form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Contact */}
      <fieldset className="grid md:grid-cols-2 gap-5">
        <div>
          <label className={labelCls}>Your name</label>
          <input className={inputCls} {...register("name")} placeholder="Full name"/>
          {errors.name && <p className={errCls}>{errors.name.message}</p>}
        </div>
        <div>
          <label className={labelCls}>Phone (WhatsApp)</label>
          <input className={inputCls} {...register("phone")} placeholder="10-digit mobile" inputMode="tel"/>
          {errors.phone && <p className={errCls}>{errors.phone.message}</p>}
        </div>
        <div className="md:col-span-2">
          <label className={labelCls}>Email <span className="lowercase tracking-normal text-muted-foreground">(optional)</span></label>
          <input className={inputCls} {...register("email")} placeholder="you@example.com"/>
          {errors.email && <p className={errCls}>{errors.email.message}</p>}
        </div>
      </fieldset>

      {/* Fulfilment */}
      <fieldset>
        <label className={labelCls}>Pickup or delivery</label>
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            { v: "pickup-civil-lines", label: "Pickup · Civil Lines" },
            { v: "pickup-s-square", label: "Pickup · S Square" },
            { v: "delivery", label: "Delivery in Jabalpur" },
        ].map((opt) => (<label key={opt.v} className="cursor-pointer">
              <input type="radio" value={opt.v} {...register("fulfilment")} className="peer sr-only"/>
              <div className={cn("px-4 py-3 text-sm border text-center transition-colors", "border-border peer-checked:border-foreground peer-checked:bg-foreground peer-checked:text-background")}>
                {opt.label}
              </div>
            </label>))}
        </div>
      </fieldset>

      {/* Date / time */}
      <fieldset className="grid md:grid-cols-2 gap-5">
        <div>
          <label className={labelCls}>Date needed</label>
          <input type="date" className={inputCls} {...register("date")} min={new Date().toISOString().split("T")[0]}/>
          {errors.date && <p className={errCls}>{errors.date.message}</p>}
        </div>
        <div>
          <label className={labelCls}>Time</label>
          <input type="time" className={inputCls} {...register("time")}/>
          {errors.time && <p className={errCls}>{errors.time.message}</p>}
        </div>
      </fieldset>

      {/* Cake details */}
      <fieldset className="grid md:grid-cols-2 gap-5">
        <div>
          <label className={labelCls}>Cake type</label>
          <select className={inputCls} {...register("cakeType")}>
            <option value="">Select…</option>
            <option>Signature</option>
            <option>Classic</option>
            <option>Cream</option>
            <option>Designer / Fondant</option>
            <option>Theme / Kids</option>
            <option>Photo print</option>
            <option>Tiered / Wedding</option>
          </select>
          {errors.cakeType && <p className={errCls}>{errors.cakeType.message}</p>}
        </div>
        <div>
          <label className={labelCls}>Flavour</label>
          <input className={inputCls} {...register("flavour")} placeholder="e.g. Chocolate Truffle"/>
          {errors.flavour && <p className={errCls}>{errors.flavour.message}</p>}
        </div>
        <div>
          <label className={labelCls}>Size (kg)</label>
          <select className={inputCls} {...register("size")}>
            <option value="0.5">0.5 kg</option>
            <option value="1">1 kg</option>
            <option value="1.5">1.5 kg</option>
            <option value="2">2 kg</option>
            <option value="3">3 kg</option>
            <option value="Other">Other (mention in notes)</option>
          </select>
        </div>
        <div className="flex items-end">
          <label className="inline-flex items-center gap-3 cursor-pointer pb-3">
            <input type="checkbox" {...register("eggless")} className="size-4 accent-[hsl(var(--accent))]"/>
            <span className="text-sm">Make it eggless (+₹50)</span>
          </label>
        </div>
      </fieldset>

      {/* Message + notes */}
      <fieldset className="space-y-5">
        <div>
          <label className={labelCls}>Message on cake <span className="lowercase tracking-normal text-muted-foreground">(optional · max 80)</span></label>
          <input className={inputCls} {...register("message")} placeholder='e.g. "Happy Birthday Aarav!"' maxLength={80}/>
          {errors.message && <p className={errCls}>{errors.message.message}</p>}
        </div>
        <div>
          <label className={labelCls}>Notes / theme reference</label>
          <textarea className={cn(inputCls, "min-h-32 resize-y")} {...register("notes")} placeholder="Tell us about colours, theme, allergies, address for delivery, etc."/>
          {errors.notes && <p className={errCls}>{errors.notes.message}</p>}
        </div>
      </fieldset>

      <button type="submit" disabled={isSubmitting} className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-foreground text-background px-10 py-4 text-xs uppercase tracking-[0.25em] hover:bg-accent transition-colors disabled:opacity-60">
        {isSubmitting ? "Sending…" : "Send order on WhatsApp"}
      </button>
      <p className="text-xs text-muted-foreground">
        Submitting opens WhatsApp with your filled order details. You'll send it to confirm.
      </p>
    </form>);
};
